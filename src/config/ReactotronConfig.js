import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from 'reactotron-redux-saga'

if (__DEV__) {
  //digite o Ip do computador
  const tron = Reactotron.configure({ host: "10.0.0.206" })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}
