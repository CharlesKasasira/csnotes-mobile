import { COLORS } from "../../helpers/constants";
import { StyleSheet } from 'react-native'

const GLOBAL_STYLES = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
        borderWidth: 5
    },
    inputField: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        height: 50,
        borderRadius: 10
    },
    btn: {
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        marginVertical: 10,
        borderRadius: 15
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
})


export { GLOBAL_STYLES }