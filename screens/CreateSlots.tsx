import React, { useContext, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Paragraph, Button } from "react-native-paper";

import { AppContext } from "../contexts/AppContext";
import { ParkingLot, Slot } from "../types/context";
import { ScreenNavigation } from "../types/screens";

type Props = {
  navigation: ScreenNavigation;
}

const CreateSlot:React.FC<Props> = ({ navigation }) => {

  const [slots, setSlots] = useState<string>("");
  const { state, dispatch } = useContext(AppContext);

  const slotCount = useMemo(() => {
    return Object.keys(state.parkingLots).length;
  }, [state]);

  const createSlot = () => {
    const count = Number(slots);
    if(count !== NaN){
      const slotMap: ParkingLot = {}
      for(let i = 0; i < count; i++){
        const slotId = Math.random().toString();
        const slotItem:Slot = {
          slotId,
          createdAt: new Date(),
          vehicleRegNo: ""
        }
        slotMap[slotId] = slotItem;
      }
      dispatch({ type: "CREATE_SLOTS", payload: slotMap });
      setSlots("");
      navigation.goBack();
    }
  }

  return(
    <View style={styles.container}>
      <Paragraph>{slotCount? slotCount: "No"} slots are created so far</Paragraph>
      <TextInput
        label="How many slots do you want to create?"
        mode="outlined"
        style={{marginBottom: 20}}
        keyboardType="number-pad"
        onChangeText={setSlots}
        maxLength={2}
      />
      <Button
        mode="contained"
        onPress={createSlot}
        contentStyle={styles.button}
        disabled={!slots}
      >
        Create
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

export default CreateSlot;