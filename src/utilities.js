import {Dimensions} from 'react-native';

const color = {
    white: '#ffffff',
    orange: '#ff8800',
    whitesmoke: '#f4f4f4',
    black: '#000000',
};

function screenHeight() {
    return Dimensions.get('window').height;
}

function screenWidth() {
    return Dimensions.get('window').width;
}

export {color, screenWidth, screenHeight}
