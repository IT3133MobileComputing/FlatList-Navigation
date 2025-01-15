import { Image, View, Text } from 'react-native'

export default function Profile({route}) {
    const {student} = route.params;
  return (
    <View>
      <Text>Name: {student.name}</Text>
      <Text>Age: {student.age}</Text>
      <Text>Course: {student.course_name}</Text>
      <Text>Gender: {student.gender}</Text>
      <Image source={student.profile_pic} />
    </View>
  )
} 