import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView, //キーボード表示時にボタン表示
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const handlePress = (): void => {
  router.back();
};

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={"買い物\nリスト"} />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Edit;
