import { useTexture } from "@react-three/drei"
import { between, insideCircle, plusMinus } from "randomish"
import { MeshStandardMaterial, NormalBlending } from "three"
import { Emitter, MeshParticles, MeshParticlesMaterial } from "three-vfx"
import { useDepthBuffer } from "./lib/useDepthBuffer"

export default function Effect() {
  const texture = useTexture("/textures/particle.png")
  const depthBuffer = useDepthBuffer()

  return (
    <MeshParticles>
      <planeGeometry />

      <MeshParticlesMaterial
        /* We can use many of the same props as the normal Three.js materials here. */
        baseMaterial={MeshStandardMaterial}
        blending={NormalBlending}
        map={texture}
        color="#ccf"
        transparent
        depthTest={true}
        depthWrite={false}
        /* We're using meshes for particles, so let's make sure they're always billboarded. */
        billboard
        /* For soft particles, we can define a softness, and also need to provide a depth buffer. */
        softness={5}
        depthTexture={depthBuffer.depthTexture}
      />

      <Emitter
        continuous
        count={() => between(5, 10)}
        setup={(c) => {
          /* Randomize the position a little. */
          const pos = insideCircle(0.5)
          c.position.set(pos.x, 0, pos.y)

          /* Set an initial velocity. */
          c.velocity.set(plusMinus(2), between(3, 15), plusMinus(2))

          /* Set an acceleration force. Like gravity! */
          c.acceleration.set(0, -12, 0)

          /* Randomize the lifetime a little. */
          c.lifetime = between(1, 2.5)

          /* Set minimum and maximum scale. By default, three-vfx will interpolate
             from one to the other linearly over the lifetime of the particle. */
          c.scale[0].setScalar(between(0.3, 0.8))
          c.scale[1].setScalar(between(0.8, 1))

          /* Modify the color a little. */
          c.color[0].multiplyScalar(between(0.6, 2))
        }}
      />
    </MeshParticles>
  )
}
