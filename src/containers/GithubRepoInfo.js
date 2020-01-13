import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {screenWidth, color} from "../utilities";
import Image from 'react-native-image-progress';

class GithubRepoInfo extends PureComponent {
    render() {
        const {item} = this.props;
        console.log(item)
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{width: '30%'}}>
                        <Image
                            resizeMode={'contain'}
                            source={{uri: item.owner.avatar_url}}
                            style={styles.gifImgStyle}/>
                    </View>
                    <View style={{width: "60%"}}>

                        <View style={styles.sec}>
                            <Text style={styles.label} numberOfLines={1}>Watchers
                                Count:</Text>
                            <Text style={styles.value}
                                  numberOfLines={1}>{item.watchers_count}</Text>
                        </View>
                        <View style={styles.sec}>
                            <Text style={styles.label} numberOfLines={1}>Repo Name:</Text>
                            <Text style={styles.value} numberOfLines={2}>{item.name}</Text>
                        </View>

                        <View style={styles.sec}>
                            <Text style={styles.label} numberOfLines={1}>
                                Full Name:</Text>
                            <Text style={styles.value} numberOfLines={1}>{item.full_name}</Text>
                        </View>


                    </View>

                </View>

            </View>
        );
    }
}

GithubRepoInfo.propTypes = {
    item: PropTypes.object.isRequired
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: color.white,
        marginHorizontal: 10
    },
    gifImgStyle: {
        width: screenWidth() * 0.3,
        height: screenWidth() * 0.3,
        margin: 10,
        borderRadius: 10,
    },
    selectedButton: {
        backgroundColor: 'lightgray',
    },
    normalButton: {
        backgroundColor: 'white',
    },
    backgroundContainer: {},
    tvGifyCreator: {
        fontSize: 14,
        color: color.black
    },
    label: {
        // color: color.black,
        fontSize: 13,
        paddingVertical:5,
        paddingHorizontal:5
    },
    value: {
        color: color.black,
        fontSize: 15,
        paddingVertical:5,
        paddingHorizontal:5,
        flexShrink:1
    },
    sec: {
        flexDirection: 'row', alignItems: 'center'
    }

});
export default GithubRepoInfo;
