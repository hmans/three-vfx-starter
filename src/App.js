import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <Canvas>
      <Environment preset="sunset" />
      <Sky />

      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}
