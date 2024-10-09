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
          source={require('./res/Black-shoe.obj')}
          resources={[require('./res/Black_shoe.mtl')]}
          position={[0, .1, 0]}
          scale={[.03, .03, .03]}
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
