import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import Abertura from './componentes/Abertura';
import Marcador from './componentes/Marcador';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Abertura} />
        <Stack.Screen name="Marcador" component={Marcador} />
      </Stack.Navigator>
    </NavigationContainer>

//     <View>

//     <Mapa2 styles={Styles.containermapa}></Mapa2>
    
//     <FAB
//         color="blue"
//         title="Adicionar marcador"
//         // onPress={() => navigation.navigate("Marcador")}
//     />
// </View>
    
  );
}