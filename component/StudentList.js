import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { students } from "./StudentsDb"
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useState } from "react";
import React  from "react";

export default function StudentList({route}) {
    const navigation = useNavigation();
    const [mystudents,setStudents] = useState(students);
    const [rerender,setRerender] = useState(false);
    React.useEffect(()=>{
        if(route.params?.newStudent){
            const { newStudent } = route.params;
            setStudents((prev)=>[...prev,{...newStudent}]);
            setRerender(!rerender)
        }
    }, [route.params?.newStudent]);
    return (
        <View style={styles.container}>
            <FlatList
                data={mystudents}
                keyExtractor={item => item.id}
                extraData={rerender}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile",{student:item})}>
                        <Text style={styles.card}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
            <Button onPress={()=>navigation.navigate('Add')}>Add New Student</Button>
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