import { useTexture } from "@react-three/drei";
import { between, plusMinus, upTo } from "randomish";
import { MeshStandardMaterial, NormalBlending } from "three";
import { Emitter, MeshParticles, MeshParticlesMaterial } from "three-vfx";
import { useDepthBuffer } from "./lib/useDepthBuffer";

export default function Effect() {
  const texture = useTexture("/textures/particle.png");
  const depthBuffer = useDepthBuffer();

  return (
    <MeshParticles>
      <planeGeometry />

      <MeshParticlesMaterial
        baseMaterial={MeshStandardMaterial}
        blending={NormalBlending}
        map={texture}
        color="#ccf"
        transparent
        billboard
        depthTest={true}
        depthWrite={false}
        softness={5}
        depthTexture={depthBuffer.depthTexture}
      />

      <Emitter
        continuous
        count={() => between(5, 10)}
        setup={(c) => {
          c.velocity
            .set(plusMinus(1), upTo(8), plusMinus(1))
            .multiplyScalar(between(1, 2));

          c.acceleration.set(0, -12, 0);

          c.lifetime = between(0.5, 2.5);

          c.scale[0].setScalar(0.5);

          c.color[0].multiplyScalar(between(0.6, 2));
        }}
      />
    </MeshParticles>
  );
}
