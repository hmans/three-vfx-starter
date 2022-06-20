import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import { Suspense } from "react"
import Effect from "./Effect"
import Pedestral from "./Pedestral"

export default function App() {
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
      <Perf position="bottom-right" />
    </Canvas>
  )
}
