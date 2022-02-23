import React from "react";
import { View, Text } from "react-native";

function FlexComp() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "80%",
        height: 300,
        backgroundColor: "#555",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          //   width: "100px",
          //   height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>1</Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          //   width: "100px",
          //   height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          //   width: "100px",
          //   height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>3</Text>
      </View>
    </View>
  );
}

export default FlexComp;
