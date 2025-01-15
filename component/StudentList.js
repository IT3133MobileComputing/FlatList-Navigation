import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { students } from "./StudentsDb"
import { useNavigation } from "@react-navigation/native";

export default function StudentList() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList
                data={students}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                        <Text style={styles.card}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#fff',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#4b0150',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    }
});