import { DarkTheme, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-elements';
import { PaperProvider } from 'react-native-paper';
import Mapa2 from './Mapa2';
import { Styles } from './Style';

const navigation = useNavigation();

const Abertura = () => {
    return (
        <PaperProvider theme={DarkTheme}>
            <View style={Styles.container}>
        
            {/* <Mapa2></Mapa2>
            
            <FAB
                color="blue"
                title="Adicionar marcador"
                onPress={() => navigation.navigate("Marcador")}
            /> */}

            </View>
        
        </PaperProvider>
    )
}

export default Abertura

