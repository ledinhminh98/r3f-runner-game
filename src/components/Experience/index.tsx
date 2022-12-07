import Level from "@Components/Level";
import Light from "@Components/Light";
import Player from "@Components/Player";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import React from "react";

interface Props {}

const Experience: React.FC<Props> = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <Physics>
        <Light />
        <Level />
        <Player />
      </Physics>
    </>
  );
};

export default Experience;
