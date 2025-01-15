import { View, StyleSheet, FlatList, Text } from "react-native";
import { students } from "./StudentsDb"

export default function StudentList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={students}
                keyExtractor={item=>item.id}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });