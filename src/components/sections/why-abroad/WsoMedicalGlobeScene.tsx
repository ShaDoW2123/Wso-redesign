"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface WsoMedicalGlobeSceneProps {
  progress?: number; // 0 to 1 scroll progress
  activeStep?: number;
}

export default function WsoMedicalGlobeScene({
  progress = 0,
  activeStep = 0,
}: WsoMedicalGlobeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const beaconGroupRef = useRef<THREE.Group | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const arcCurveRef = useRef<THREE.CatmullRomCurve3 | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 2. Lighting (Calm Clinical WSO Palette: Navy, Sky, White)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xbfd7ff, 2.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4c6da6, 1.8);
    fillLight.position.set(-6, -4, -3);
    scene.add(fillLight);

    // 3. Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Core Sphere (Soft frosted clinical core)
    const coreGeo = new THREE.SphereGeometry(2.2, 48, 48);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xf2f7ff,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // Wireframe Rings (Coordinate latitude/longitude grid)
    const wireGeo = new THREE.SphereGeometry(2.22, 24, 16);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x94aeda,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // Outer Celestial Orbit Ring
    const ringGeo = new THREE.RingGeometry(2.7, 2.74, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x4c6da6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    globeGroup.add(ringMesh);

    // 4. Trajectory Arc (New Delhi -> International Medical Hubs)
    const p0 = new THREE.Vector3(0.6, 0.4, 2.15); // Origin: India
    const p1 = new THREE.Vector3(0.2, 1.5, 2.4);  // Apex
    const p2 = new THREE.Vector3(-0.9, 1.2, 1.7); // Global Destination
    const curve = new THREE.CatmullRomCurve3([p0, p1, p2]);
    arcCurveRef.current = curve;

    const curvePoints = curve.getPoints(50);
    const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const arcMat = new THREE.LineDashedMaterial({
      color: 0x000b33,
      dashSize: 0.12,
      gapSize: 0.08,
      linewidth: 2,
    });
    const arcLine = new THREE.Line(arcGeo, arcMat);
    arcLine.computeLineDistances();
    globeGroup.add(arcLine);

    // Origin Pin (India)
    const originPinGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const originPinMat = new THREE.MeshBasicMaterial({ color: 0x4c6da6 });
    const originPin = new THREE.Mesh(originPinGeo, originPinMat);
    originPin.position.copy(p0);
    globeGroup.add(originPin);

    // Destination Pin (Global Medical University)
    const destPinGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const destPinMat = new THREE.MeshBasicMaterial({ color: 0x000b33 });
    const destPin = new THREE.Mesh(destPinGeo, destPinMat);
    destPin.position.copy(p2);
    globeGroup.add(destPin);

    // 5. 3D Traveling Medical Cross Beacon (Replaces the paper plane!)
    const beaconGroup = new THREE.Group();
    globeGroup.add(beaconGroup);
    beaconGroupRef.current = beaconGroup;

    // Cross geometry
    const crossMat = new THREE.MeshStandardMaterial({
      color: 0x000b33,
      emissive: 0x4c6da6,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.08), crossMat);
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.08), crossMat);
    beaconGroup.add(crossV);
    beaconGroup.add(crossH);

    // Beacon Glow Halo
    const haloGeo = new THREE.RingGeometry(0.18, 0.22, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xbfd7ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    beaconGroup.add(haloMesh);

    // Position beacon at initial progress
    const initPos = curve.getPointAt(0);
    beaconGroup.position.copy(initPos);

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle ambient orbital drift
      if (globeGroup) {
        globeGroup.rotation.y = elapsedTime * 0.12;
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  // Update position of the medical beacon as scroll progress changes
  useEffect(() => {
    if (!arcCurveRef.current || !beaconGroupRef.current) return;
    const clamped = Math.max(0, Math.min(1, progress));
    const point = arcCurveRef.current.getPointAt(clamped);
    beaconGroupRef.current.position.copy(point);

    // Rotate beacon slightly with motion
    beaconGroupRef.current.rotation.z = clamped * Math.PI * 0.5;
  }, [progress]);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Soft Clinical Atmospheric Glow Behind Three.js Canvas */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-64 rounded-full bg-gradient-to-tr from-[#BFD7FF]/30 to-[#94AEDA]/20 blur-3xl" />
      </div>

      {/* Stage Live Status Pill */}
      <div className="absolute top-4 left-6 z-10 flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono text-[#000B33] shadow-xs">
        <span className="size-1.5 rounded-full bg-[#4C6DA6] animate-pulse" />
        <span>Global Clinical Horizon</span>
      </div>

      {/* Stage Legend */}
      <div className="absolute bottom-4 left-6 right-6 z-10 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-200/60 pt-2.5 bg-white/70 backdrop-blur-xs px-3 rounded-xl">
        <span className="text-[#000B33] font-semibold">Origin: India (NEET)</span>
        <span className="text-[#4C6DA6] font-semibold">Destination: World Top 500</span>
      </div>
    </div>
  );
}
