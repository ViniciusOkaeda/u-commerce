import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
  ViroNode,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroAmbientLight,
  ViroSpotLight
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const ARSceneEcommerce = () => {
  const [text, setText] = useState("Initializing AR...");


  return (
    <ViroARScene >

      <ViroAmbientLight color={"#aaaaaa"} />
      <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
      <ViroNode position={[0, 0, -1]} dragType="FixedToWorld" onDrag={() => { }} >
        <Viro3DObject
          source={{
            uri: "https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/res/Black-shoe.obj", // URL do arquivo .obj
          }}

          resources={[
            { uri: "https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/res/Black_shoe.mtl" }, // URL do arquivo .mtl (material)
          ]}

          position={[0, .1, 0]}
          scale={[.02, .02, .02]}
          type="OBJ"
        />
      </ViroNode>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: ARSceneEcommerce,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
