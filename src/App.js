import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { LinearEncoding } from "three";
import Effect from "./Effect";

function Pedestral(props) {
  return (
    <group {...props}>
      {/* Upper */}
      <mesh>
        <cylinderGeometry args={[3, 3, 0.2, 48, 1]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      {/* Lower */}
      <mesh position-y={-0.3}>
        <cylinderGeometry args={[3.2, 3.5, 0.5, 48, 1]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Column */}
      <mesh position-y={-250.55}>
        <cylinderGeometry args={[3.5, 3.5, 500, 48, 1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <Canvas
      gl={{
        powerPreference: "high-performance",
        depth: true,
      }}
      dpr={[1, 1]}
    >
      {/* Environment, lighting, etc. */}
      <Environment preset="sunset" />
      <Sky />
      <fog attach="fog" args={["#e8e8f0", 10, 100]} />
      <PerspectiveCamera position={[0, 5, 10]} makeDefault />
      <OrbitControls
        enablePan
        enableZoom
        maxPolarAngle={Math.PI / 2}
        makeDefault
        target={[0, 2, 0]}
      />

      {/* A nice pedestral for your effect to present itself on. */}
      <Pedestral />

      {/* The actual effect. Do your editing in that component. */}
      <Suspense>
        <Effect />
      </Suspense>

      {/* Performance monitoring */}
      <Perf />
    </Canvas>
  );
}
