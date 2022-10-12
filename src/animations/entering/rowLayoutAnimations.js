import {Dimensions} from "react-native";
import {withSpring, withTiming} from "react-native-reanimated";

const width = Dimensions.get('window').width;

export const rowLayoutAnimation = (values) => {
    'worklet';
    const animations = {
        originX: withSpring(0, { duration: 400 }),
        opacity: withSpring(1, { duration: 300 }),
    };
    const initialValues = {
        originX: width,
        opacity: 0,
    };
    return {
        initialValues,
        animations,
    };
}
