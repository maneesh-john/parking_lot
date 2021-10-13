import React, { useContext, useMemo } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Paragraph, Title, List, Button } from "react-native-paper";

import { AppContext } from "../contexts/AppContext";
import { Slot } from "../types/context";
import { ScreenNavigation } from "../types/screens";

type Props = {
  navigation: ScreenNavigation;
}

const RegisterSlot:React.FC<Props> = ({ navigation }) => {

  const { state, dispatch } = useContext(AppContext);

  const slots = useMemo(() => {
    return Object.values(state.parkingLots);
  }, [state]);

  const calculateAmount = (date: Date) => {
    const hours: number = Math.ceil((+new Date() - +date)/1000/60/60);
    if(hours <= 2){
      return 10;
    }
    return (hours - 1) * 10;
  }

  const clearSlot = (id: string) => {
    const { [id]: omit, ...rest } = state.parkingLots;
    dispatch({ type: "UPDATE_SLOTS", payload: rest });
  }

  return(
    <View style={styles.container}>
      <FlatList
        data={slots}
        keyExtractor={item => item.slotId}
        ListEmptyComponent={<Title style={styles.emptyText}>No booked slots</Title>}
        renderItem={({ item }) => {
          if(!item.vehicleRegNo) return null;
          return(
            <List.Section style={styles.section}>
              <Title>ID: {item.slotId}</Title>
              <Paragraph>Reg. No: {item.vehicleRegNo}</Paragraph>
              <Paragraph>Price: {calculateAmount(item.createdAt)}</Paragraph>
              <Button onPress={() => clearSlot(item.slotId)}>
                Confirm Payment
              </Button>
            </List.Section>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 50
  },
  section: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: "5%"
  },
  emptyText: {
    padding: "5%",
    textAlign: "center"
  }
});

export default RegisterSlot;