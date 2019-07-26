import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

if (__DEV__) {
  //digite o Ip do computador
  const tron = Reactotron.configure({ host: "10.0.0.206" })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
