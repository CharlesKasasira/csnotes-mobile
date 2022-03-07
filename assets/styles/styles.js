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
        borderRadius: 25
    }
})


export { GLOBAL_STYLES }