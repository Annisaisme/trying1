import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { Heading, Center, Box, VStack, Image, FormControl, Input, Label, Button, Validate, Stack, Card} from "native-base";
import React from 'react';
import Gap from '../components/Gap';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Edit_Profile = () => {
const [Username, setUsername] = React.useState('');
const [Email, setEmail] = React.useState('');
const [Password, setPassword] = React.useState('');
const [Bday, setBday] = React.useState('');
const navigation = useNavigation();
return (
<>
<SafeAreaView flex={1} backgroundColor={"#075985"}>
<Box flex={1} backgroundColor={"#075985"}>

<TouchableOpacity activeOpacity={0.5} onPress={() =>

navigation.goBack()}>

<Box mt={10} mr={"10"}>
<Ionicons name="arrow-back-outline" size={32} color="white" />
</Box>
</TouchableOpacity>
<Center>
<Heading color={'white'} size={'xl'}>Edit Profile</Heading>

<Image size={150} borderRadius={100}

source={require("../assets/kuromi.jpg")} />

<Gap height={20} />

<Card backgroundColor={'white'} borderTopRadius={20}

borderBottomRadius={20} borderColor={'#075985'} w={'100%'} h={'80%'}>

<Stack alignSelf="left" mt="4">
<FormControl >
<FormControl.Label _text={{ bold: true, fontSize: "md", }}>
Username
</FormControl.Label>
<Input placeholder="Username" onChangeText={(value) =>

setUsername({ ...Username, name: value })} />

</FormControl>
<FormControl>
<FormControl.Label _text={{ bold: true, fontSize: "md", }}>
Email
</FormControl.Label>
<Input placeholder="Email" onChangeText={(value) => setEmail({

...Email, name: value })} />
</FormControl>
<FormControl>
<FormControl.Label _text={{ bold: true, fontSize: "md", }}>
Password

</FormControl.Label>
<Input placeholder="Password" onChangeText={(value) =>

setPassword({ ...Password, name: value })}/>

</FormControl>
<FormControl>
<FormControl.Label _text={{ bold: true, fontSize: "md", }}>
Date of Birth
</FormControl.Label>
<Input placeholder="DD/MM/YYYY" onChangeText={(value) =>

setBday({ ...Bday, name: value })}/>
</FormControl>
</Stack>

<Button onPress={() => navigation.navigate('Setting')}

backgroundColor={"#075985"} mt={5}>Save Changes</Button>

</Card>
</Center>
</Box>
</SafeAreaView>
</>
);
};
export default Edit_Profile