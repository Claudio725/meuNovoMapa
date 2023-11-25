import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FAB } from 'react-native-elements';
import { styled } from 'styled-components';
import { Styles } from './Style';

const navigation = useNavigation();

const Footer = ({mode}) => {

    const onPressBtn = () =>{
        navigation.navigate('Marcador');
        console.log('FAB IS PRESSED dddddddd')
    }

    return (
       <Footer.Container mode={mode}>
            <FAB
                color="blue"
                title="Adicionar marcador"
                styles={Styles.fab}
                onPress={
                    onPressBtn()
                }
            />
       </Footer.Container>
    )
}

export default Footer


Footer.Container = styled.View`
    border-top: solid 1 px #ccc;
`
