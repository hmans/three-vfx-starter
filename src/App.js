import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <Canvas>
      {/* Environment, lighting, etc. */}
      <Environment preset="sunset" />
      <Sky />

      {/* User Controls */}
      <OrbitControls />

      {/* Actual Scene Contents */}
      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
}
