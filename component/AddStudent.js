import { Image, View } from 'react-native'
import { useState } from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AddStudent() {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const newStudent={
        name:name,
        id:"451d",
        age:15
    }
    return (
        <View>
            <TextInput mode='outlined' label="name" value={name} onChangeText={setName}/>
            <Button onPress={()=>{navigation.popTo("StudentList",{newStudent});
        }}>ADD</Button>
        </View>
    )
} 