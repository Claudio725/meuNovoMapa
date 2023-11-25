import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { Styles } from './Style';

const Mapa2 = () => {
  return (
    <View style={Styles.containermapa}>
    {/*Render our MapView*/}
      <MapView
        style={Styles.containermapa}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

export default Mapa2