import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { PaperProvider } from "react-native-paper";
import { init } from "./src/db";
import Loading from "./src/components/Loading";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  init();

  if (!fontLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator />
        <Loading></Loading>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
