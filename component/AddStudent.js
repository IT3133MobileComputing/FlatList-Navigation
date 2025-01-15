import { Image, View } from 'react-native'
import { useState } from 'react';
import { Text, TextInput, Button } from 'react-native-paper';

export default function AddStudent() {
    const [name, setName] = useState(students);
    return (
        <View>
            <TextInput mode='outlined' label="name" value={name} onChangeText={setName}/>
            <Button>ADD</Button>
        </View>
    )
} 