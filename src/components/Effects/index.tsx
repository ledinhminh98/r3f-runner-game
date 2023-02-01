import { SSR, DepthOfField, EffectComposer } from "@react-three/postprocessing";

interface Props {}

const Effects: React.FC<Props> = () => {
  const ssrProps = {
    intensity: 0.45,
    exponent: 1.0,
    distance: 10,
    fade: 10,
    roughnessFade: 1,
    thickness: 10,
    ior: 0.45,
    maxRoughness: 1,
    maxDepthDifference: 10,
    blend: 0.95,
    correction: 1,
    correctionRadius: 1,
    blur: 0,
    blurKernel: 1,
    blurSharpness: 10,
    jitter: 0.75,
    jitterRoughness: 0.2,
    steps: 40,
    refineSteps: 5,
    missedRays: true,
    useNormalMap: true,
    useRoughnessMap: true,
    resolutionScale: 1,
    velocityResolutionScale: 1
  };

  const dofProps = {
    focusDistance: 0.01,
    focalLength: 0.2,
    bokehScale: 3
  };

  return (
    <EffectComposer>
      <SSR {...ssrProps} />
      <DepthOfField {...dofProps} />
    </EffectComposer>
  );
};

export default Effects;
