import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Information () {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.oneContainer}>
          <View style={styles.oneItemContainer}>
            <View style={styles.oneTitleContainer} >
              <Text style={styles.oneTitle}>Saldo</Text>
            </View>
            <View style={styles.oneCounterContainer}>
              <View style={styles.oneCounterSubContainer}>
                <Text style={styles.oneCounter}>1.231.233</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.twoContainer}>
          <View style={styles.twoItemContainer}>
            <View style={styles.twoTitleContainer} >
              <Text style={styles.twoTitle}>U. Movimientos</Text>
            </View>
            <View style={styles.twoCounterContainer}>
              <View style={styles.twoCounterSubContainer}>
                <Text style={styles.twoCounter}>40</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.threeContainer}>
          <View style={styles.threeItemContainer}>
            <View style={styles.threeTitleContainer} >
              <Text style={styles.threeTitle}>Balance</Text>
            </View>
            <View style={styles.threeCounterContainer}>
              <View style={styles.threeCounterSubContainer}>
                <Text style={styles.threeCounter}>-130.000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
