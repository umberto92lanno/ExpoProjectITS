import {Dimensions} from "react-native";
import {withSpring, withTiming} from "react-native-reanimated";

const width = Dimensions.get('window').width;

export const rowLayoutExitingAnimation = (values) => {
    'worklet';
    const animations = {
        originX: withSpring(width, { duration: 400 }),
        opacity: withSpring(0, { duration: 300 }),
    };
    const initialValues = {
        originX: values.currentOriginX,
        opacity: 1,
    };
    return {
        initialValues,
        animations,
    };
}
