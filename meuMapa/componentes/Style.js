import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: '#eaeaea',
        fontWeight: 'bold'
    },
    footerView: {
        backgroundColor: '#eaeaea',
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
    fab: {
        width: '80%',
        position: 'absolute',
        right: 20,
        bottom: 0,
        margin: 16
    },
    containermapa: {
        width: "100%",
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
      map: {
        ...StyleSheet.absoluteFillObject
      }
})
