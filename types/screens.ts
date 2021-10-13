import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface NavigationProp {
  Home: undefined;
  CreateSlot: undefined;
  RegisterSlot: undefined;
  ClearSlot: undefined;
}

export type ScreenNavigation = NativeStackNavigationProp<NavigationProp, "Home" | "CreateSlot" | "RegisterSlot" | "ClearSlot">;