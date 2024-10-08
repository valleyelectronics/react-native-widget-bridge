import { NativeModules } from "react-native";

type WidgetBridgeType = {
  multiply(a: number, b: number): Promise<number>;
  initUserDefaultsSuit(suiteName: string): Promise<boolean>;
  ensureUserDefaultsSuit(suiteName: string): Promise<boolean>;
  setDict(key: string, value: object): Promise<boolean>;
  getDict(key: string): Promise<object>;
  setString(key: string, value: string): Promise<boolean>;
  getString(key: string): Promise<string>;
  removeObject(key: string): Promise<boolean>;
  reloadWidget(kind: string): Promise<boolean>;
  reloadAllWidgets(): Promise<boolean>;
};

const { WidgetBridge } = NativeModules;

export default WidgetBridge as WidgetBridgeType;
