import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text
        onPress={() => alert('This is the "Home" screen')}
        style={styles.fontstyle}>Home Screen</Text>
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