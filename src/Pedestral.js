export default function Pedestral(props) {
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
