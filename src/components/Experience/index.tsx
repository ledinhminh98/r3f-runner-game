import Effects from "@Components/Effects";
import Level from "@Components/Level";
import Light from "@Components/Light";
import Player from "@Components/Player";
import useGame from "@Hooks/useGame";
import { Physics } from "@react-three/rapier";
import React from "react";

interface Props {}

const Experience: React.FC<Props> = () => {
  const blocksCount = useGame((state) => state.blocksCount);

  return (
    <>
      <color args={["#252731"]} attach="background" />
      <Physics>
        <Light />
        <Level count={blocksCount} />
        <Player />
      </Physics>
      <Effects />
    </>
  );
};

export default Experience;
