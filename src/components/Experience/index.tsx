import Level from "@Components/Level";
import Light from "@Components/Light";
import { OrbitControls } from "@react-three/drei";
import { Debug, Physics } from "@react-three/rapier";
import React from "react";

interface Props {}

const Experience: React.FC<Props> = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <Physics>
        <Debug />
        <Light />
        <Level />
      </Physics>
    </>
  );
};

export default Experience;
