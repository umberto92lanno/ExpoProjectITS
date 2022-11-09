import React, {memo} from 'react';
import {View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export const Card = memo(({
    id,
    temperature,
    day,
    quality,
    wind,
    onPress,
}) => {
    return (
        <View style={styles.container}>
          <ImageBackground
              source={{ uri: 'https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_Weather.jpg?h=d1cb525d&itok=lvYWh_W8'}}
              style={styles.bgContainer}
          >
            <View style={styles.temperatureContainer}>
                <Text>Copenhagen</Text>
                <View style={styles.infoContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={{ uri: 'https://mpng.subpng.com/20180422/tfw/kisspng-computer-icons-cloud-computing-cloud-icon-5add585f063841.3980971615244555190255.jpg' }}
                            style={{ width: 70, height: 70, resiMode: 'contain' }}
                        />
                        <Text>Sunny</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.degrees}>{temperature}°</Text>
                        <Text>12/24°</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.qualityContainer}>
                            <Text style={styles.quality}>{quality}</Text>
                        </View>
                        <Text>{wind}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.dayContainer}>
                <View style={styles.moreContainer}>
                    <Text style={styles.dayText}>{day}</Text>
                    <TouchableOpacity onPress={() => onPress(id)}>
                        <Text style={styles.moreText}>More ></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image
                            source={{ uri: 'https://mpng.subpng.com/20180422/tfw/kisspng-computer-icons-cloud-computing-cloud-icon-5add585f063841.3980971615244555190255.jpg' }}
                            style={styles.icon}
                        />
                    </View>
                    <Text>10/17°</Text>
                </View>
            </View>
          </ImageBackground>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    bgContainer: {
        // backgroundColor: 'rgb(12, 60, 93)', //rgba(12, 60, 93, 0.5) //#123456
        flexDirection: 'row',
        padding: 10,
    },
    temperatureContainer: {
        flex: 1,
        borderRightWidth: 1,
    },
    dayContainer: {
        marginLeft: 5,
    },
    moreContainer: {
      flexDirection: 'row',
    },
    iconContainer: {
      alignItems: 'center',
       justifyContent: 'center',
        flex: 1,
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    dayText: {
        marginRight: 20,
        fontSize: 16,
    },
    moreText: {
        fontSize: 16,
    },
    infoContainer: {
      flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    quality: {

    },
    qualityContainer: {
        backgroundColor: 'rgb(141,237, 88)',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    degrees: {
      fontSize: 50,
        marginLeft: 10,
    },
});
