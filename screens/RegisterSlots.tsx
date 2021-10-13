import React, { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { AppContext } from "../contexts/AppContext";
import { Slot } from "../types/context";
import { ScreenNavigation } from "../types/screens";

type Props = {
  navigation: ScreenNavigation;
}

const RegisterSlot:React.FC<Props> = ({ navigation }) => {

  const [no, setNo] = useState<string>("");
  const { state, dispatch } = useContext(AppContext);

  const registerSlot = () => {
    let idExists:boolean = false;
    const freeSlot = Object.keys(state.parkingLots).find(lot => {
      if(state.parkingLots[lot].vehicleRegNo == no){
        idExists = true;
      }
      return !state.parkingLots[lot].vehicleRegNo;
    });
    if(idExists){
      Alert.alert("Vehicle is already registered");
      return;
    }
    if(!freeSlot){
      Alert.alert("No slots are free right now");
      return;
    }
    const newSlot: Slot = {
      slotId: freeSlot,
      vehicleRegNo: no,
      createdAt: new Date()
    }
    dispatch({ type: "REGISTER_SLOT", payload: newSlot });
    setNo("");
    navigation.goBack();
  }

  return(
    <View style={styles.container}>
      <TextInput
        label="Enter registration number"
        mode="outlined"
        style={{marginBottom: 20}}
        onChangeText={setNo}
        value={no}
        maxLength={10}
      />
      <Button
        mode="contained"
        onPress={registerSlot}
        contentStyle={styles.button}
        disabled={!no}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%"
  },
  button: {
    height: 50
  }
});

export default RegisterSlot;