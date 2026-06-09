"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const dotsRef = useRef<THREE.Points>(null);

  // Wireframe sphere
  const wireGeometry = useMemo(() => new THREE.SphereGeometry(2, 32, 32), []);

  // Random dots on globe (connections worldwide)
  const dotsData = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const c1 = new THREE.Color("#4f9eff");
    const c2 = new THREE.Color("#00d4aa");

    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.05;
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      const c = Math.random() > 0.6 ? c2 : c1;
      colors.push(c.r, c.g, c.b);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geom;
  }, []);

  useFrame((_, dt) => {
    if (meshRef.current) meshRef.current.rotation.y += dt * 0.1;
    if (dotsRef.current) dotsRef.current.rotation.y += dt * 0.1;
  });

  return (
    <>
      <mesh ref={meshRef} geometry={wireGeometry}>
        <meshBasicMaterial color="#4f9eff" wireframe transparent opacity={0.25} />
      </mesh>
      <points ref={dotsRef} geometry={dotsData}>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default function NetworkGlobe() {
  return (
    <section id="globe" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> netmap --global
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> Global Network
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-2">
            ▸ Drag to rotate · 500+ monitored nodes worldwide
          </p>
        </motion.div>

        <div className="corner-brackets glass rounded-lg overflow-hidden h-[500px]">
          <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.5} />
            <Stars radius={50} depth={50} count={2000} factor={3} fade speed={1} />
            <Globe />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
