import { View, Text, StyleSheet, TextInput } from "react-native";
//import { Feather } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

import MemoListitem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import LogOutButton from "../../components/logOutButton";

const handlePress = (): void => {
  router.push("/memo/create");
};

const List = (): JSX.Element => {
  //リスト画面においてだけ、ヘッダーのログアウトボタンを表示。
  //useEffectを使うことでページを開いた時だけ実行
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <MemoListitem />
        <MemoListitem />
        <MemoListitem />
      </View>

      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default List;
