import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// A small low-poly engineer, built from primitives (no model files), standing on a
// hexagonal platform with shipping-container cubes orbiting around them.

const C = {
  skin: "#d9a27a",
  hair: "#1b1714",
  hoodie: "#2b5560",
  hoodieDark: "#22444d",
  pants: "#1d2630",
  shoe: "#e9e3d8",
  hat: "#f0a35e",
  platform: "#161e25",
  edge: "#f0a35e",
  eye: "#111111",
};

const pointer = { x: 0, y: 0 };

function Engineer({ waveSignal, still }: { waveSignal: React.MutableRefObject<number>; still: boolean }) {
  const root = useRef<THREE.Group>(null!);
  const torso = useRef<THREE.Group>(null!);
  const head = useRef<THREE.Group>(null!);
  const armR = useRef<THREE.Group>(null!);
  const foreR = useRef<THREE.Group>(null!);
  const armL = useRef<THREE.Group>(null!);
  const eyes = useRef<THREE.Group>(null!);
  const wave = useRef({ start: -10, lastSignal: 0 });
  const blink = useRef({ next: 2 });

  const flat = (color: string, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
    new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.75, metalness: 0.05, ...extra });
  const m = useMemo(
    () => ({
      skin: flat(C.skin),
      hair: flat(C.hair),
      hoodie: flat(C.hoodie),
      hoodieDark: flat(C.hoodieDark),
      pants: flat(C.pants),
      shoe: flat(C.shoe),
      hat: flat(C.hat, { roughness: 0.45, metalness: 0.15 }),
      eye: new THREE.MeshBasicMaterial({ color: C.eye }),
      white: flat("#f4efe6"),
    }),
    [],
  );

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (waveSignal.current !== wave.current.lastSignal) {
      wave.current.lastSignal = waveSignal.current;
      wave.current.start = t;
    }
    const wt = t - wave.current.start;
    const waving = wt >= 0 && wt < 2.2;

    // idle breathing + sway
    const breathe = still ? 0 : Math.sin(t * 2) * 0.012;
    torso.current.scale.y = 1 + breathe;
    root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, (still ? 0 : Math.sin(t * 0.5) * 0.08) + pointer.x * 0.35, 0.05);
    // a little hop at the start of a wave
    root.current.position.y = waving && wt < 0.45 ? Math.sin((wt / 0.45) * Math.PI) * 0.12 : THREE.MathUtils.lerp(root.current.position.y, 0, 0.2);

    // head follows the cursor
    head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, pointer.x * 0.5, 0.08);
    head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -pointer.y * 0.25, 0.08);
    head.current.rotation.z = still ? 0 : Math.sin(t * 1.3) * 0.03;

    // right arm: raise and wave, otherwise hang with a gentle swing
    const targetUp = waving ? -2.6 : -0.12 + (still ? 0 : Math.sin(t * 2) * 0.04);
    armR.current.rotation.z = THREE.MathUtils.lerp(armR.current.rotation.z, targetUp, 0.12);
    foreR.current.rotation.z = waving ? Math.sin(wt * 14) * 0.45 : THREE.MathUtils.lerp(foreR.current.rotation.z, 0, 0.15);
    armL.current.rotation.z = THREE.MathUtils.lerp(armL.current.rotation.z, 0.12 + (still ? 0 : Math.sin(t * 2 + 1) * 0.04), 0.1);

    // blink
    if (!still) {
      if (t > blink.current.next) blink.current.next = t + 2.5 + Math.random() * 3;
      const b = blink.current.next - t;
      eyes.current.scale.y = b < 0.12 ? 0.1 : 1;
    }
    void dt;
  });

  return (
    <group ref={root}>
      {/* legs */}
      {[-0.17, 0.17].map((x) => (
        <group key={x} position={[x, 0.55, 0]}>
          <mesh material={m.pants} position={[0, 0, 0]}>
            <capsuleGeometry args={[0.12, 0.6, 3, 8]} />
          </mesh>
          <mesh material={m.shoe} position={[0, -0.42, 0.06]}>
            <boxGeometry args={[0.24, 0.13, 0.36]} />
          </mesh>
        </group>
      ))}

      {/* torso (hoodie) */}
      <group ref={torso} position={[0, 1.18, 0]}>
        <mesh material={m.hoodie}>
          <capsuleGeometry args={[0.36, 0.5, 4, 10]} />
        </mesh>
        {/* hoodie pocket + drawstrings */}
        <mesh material={m.hoodieDark} position={[0, -0.18, 0.33]}>
          <boxGeometry args={[0.42, 0.16, 0.06]} />
        </mesh>
        {[-0.07, 0.07].map((x) => (
          <mesh key={x} material={m.white} position={[x, 0.18, 0.35]}>
            <cylinderGeometry args={[0.015, 0.015, 0.2, 5]} />
          </mesh>
        ))}
        {/* tiny amber badge */}
        <mesh material={m.hat} position={[-0.2, 0.12, 0.33]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.1, 0.1, 0.03]} />
        </mesh>
      </group>

      {/* left arm */}
      <group ref={armL} position={[-0.46, 1.48, 0]}>
        <mesh material={m.hoodie} position={[0, -0.32, 0]}>
          <capsuleGeometry args={[0.1, 0.48, 3, 8]} />
        </mesh>
        <mesh material={m.skin} position={[0, -0.66, 0]}>
          <icosahedronGeometry args={[0.1, 0]} />
        </mesh>
      </group>

      {/* right arm (waves) — pivot at the shoulder, forearm pivot at the elbow */}
      <group ref={armR} position={[0.46, 1.48, 0]}>
        <mesh material={m.hoodie} position={[0, -0.18, 0]}>
          <capsuleGeometry args={[0.1, 0.22, 3, 8]} />
        </mesh>
        <group ref={foreR} position={[0, -0.36, 0]}>
          <mesh material={m.hoodie} position={[0, -0.14, 0]}>
            <capsuleGeometry args={[0.095, 0.2, 3, 8]} />
          </mesh>
          <mesh material={m.skin} position={[0, -0.32, 0]}>
            <icosahedronGeometry args={[0.105, 0]} />
          </mesh>
        </group>
      </group>

      {/* head */}
      <group ref={head} position={[0, 1.95, 0]}>
        <mesh material={m.skin} position={[0, 0.05, 0]}>
          <icosahedronGeometry args={[0.36, 1]} />
        </mesh>
        {/* hair */}
        <mesh material={m.hair} position={[0, 0.17, -0.04]} scale={[1.03, 0.85, 1.03]}>
          <icosahedronGeometry args={[0.35, 1]} />
        </mesh>
        {/* ears */}
        {[-0.35, 0.35].map((x) => (
          <mesh key={x} material={m.skin} position={[x, 0.03, 0]}>
            <icosahedronGeometry args={[0.07, 0]} />
          </mesh>
        ))}
        {/* eyes */}
        <group ref={eyes} position={[0, 0.06, 0.31]}>
          {[-0.12, 0.12].map((x) => (
            <mesh key={x} material={m.eye} position={[x, 0, 0]}>
              <sphereGeometry args={[0.04, 8, 8]} />
            </mesh>
          ))}
        </group>
        {/* smile */}
        <mesh material={m.eye} position={[0, -0.1, 0.33]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.07, 0.014, 4, 10, Math.PI]} />
        </mesh>
        {/* hard hat — a builder of infrastructure */}
        <group position={[0, 0.3, 0]}>
          <mesh material={m.hat}>
            <sphereGeometry args={[0.38, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
          </mesh>
          <mesh material={m.hat} position={[0, 0.01, 0.06]} scale={[1, 1, 1.12]}>
            <cylinderGeometry args={[0.47, 0.47, 0.035, 12]} />
          </mesh>
          <mesh material={m.hat} position={[0, 0.2, 0]}>
            <boxGeometry args={[0.07, 0.2, 0.6]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Platform({ still }: { still: boolean }) {
  const ring = useRef<THREE.Mesh>(null!);
  const cubes = useRef<THREE.Group>(null!);
  const palette = ["#f0a35e", "#6fc3c9", "#a796e8", "#84cc8c", "#ea7870", "#e2cd78"];
  useFrame((s) => {
    if (still) return;
    const t = s.clock.elapsedTime;
    cubes.current.rotation.y = t * 0.25;
    cubes.current.children.forEach((c, i) => {
      c.position.y = 0.55 + Math.sin(t * 1.4 + i) * 0.12 + (i % 2) * 0.35;
      c.rotation.x = t * 0.6 + i;
      c.rotation.z = t * 0.4 + i;
    });
    (ring.current.material as THREE.MeshBasicMaterial).opacity = 0.55 + Math.sin(t * 2) * 0.2;
  });
  return (
    <group>
      <mesh position={[0, -0.12, 0]}>
        <cylinderGeometry args={[1.35, 1.5, 0.24, 6]} />
        <meshStandardMaterial color={C.platform} flatShading roughness={0.9} />
      </mesh>
      <mesh ref={ring} position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 6]}>
        <ringGeometry args={[1.22, 1.3, 6]} />
        <meshBasicMaterial color={C.edge} transparent opacity={0.6} />
      </mesh>
      <group ref={cubes}>
        {palette.map((col, i) => {
          const a = (i / palette.length) * Math.PI * 2;
          return (
            <mesh key={col} position={[Math.cos(a) * 1.75, 0.6, Math.sin(a) * 1.75]}>
              <boxGeometry args={[0.2, 0.13, 0.13]} />
              <meshStandardMaterial color={col} flatShading roughness={0.5} emissive={col} emissiveIntensity={0.18} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

export default function CharacterScene({ waveSignal, still }: { waveSignal: React.MutableRefObject<number>; still: boolean }) {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.75, 6], fov: 34 }}
      frameloop={still ? "demand" : "always"}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera }) => camera.lookAt(0, 1.05, 0)}
    >
      <hemisphereLight args={["#cfe7ea", "#1a1410", 0.75]} />
      <directionalLight position={[3, 5, 4]} intensity={1.7} color="#ffd9b0" />
      <directionalLight position={[-4, 2, -3]} intensity={1.1} color="#6fc3c9" />
      <group position={[0, -0.05, 0]}>
        <Engineer waveSignal={waveSignal} still={still} />
        <Platform still={still} />
      </group>
    </Canvas>
  );
}
