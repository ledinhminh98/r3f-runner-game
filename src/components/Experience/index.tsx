import Light from "@Components/Light";
import { OrbitControls } from "@react-three/drei";
import React from "react";

interface Props {}

const Experience: React.FC<Props> = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <Light />
      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
