import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import { Suspense } from "react"
import Pedestral from "./Pedestral"

export default function Venue({ children }) {
  return (
    <Canvas
      gl={{
        powerPreference: "high-performance",
        depth: true
      }}
      dpr={[1, 1]}
    >
      {/* Environment, lighting, etc. */}
      <Environment preset="sunset" />
      <Sky distance={450000} sunPosition={[0.5, 0, -0.2]} />
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
      <Suspense>{children}</Suspense>

      {/* Performance monitoring */}
      <Perf position="bottom-right" />
    </Canvas>
  )
}
