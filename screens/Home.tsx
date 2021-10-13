import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableRipple, List } from "react-native-paper";

import { ScreenNavigation } from "../types/screens";

type Props = {
  navigation: ScreenNavigation;
}

const Home:React.FC<Props> = ({ navigation }) => {

  const createSlot = () => navigation.navigate("CreateSlot");
  const registerSlot = () => navigation.navigate("RegisterSlot");
  const clearSlot = () => navigation.navigate("ClearSlot");

  return(
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Actions</List.Subheader>
        <TouchableRipple
          onPress={createSlot}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item title="Create Slots" />
        </TouchableRipple>
        <TouchableRipple
          onPress={registerSlot}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item title="Register Slot" />
        </TouchableRipple>
        <TouchableRipple
          onPress={clearSlot}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item title="Clear Slot" />
        </TouchableRipple>
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%"
  }
});

export default Home;