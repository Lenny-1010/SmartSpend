import * as React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text
        onPress={() => navigation.navigate('Home')}
        style={styles.fontstyle}>Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fontstyle: {
        fontsize: 26,
        fontweight: 'bold',
    },
  });