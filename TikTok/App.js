import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        TikTok - Clone
      </Text>
      <StatusBar style="auto" />
      <Button
        title="Solid Button"
      />

      <Button
        title="Outline button"
        type="outline"
      />

      <Button
        title="Clear button"
        type="clear"
      />
      <Icon
        name='rowing' />
      <Icon
        name='g-translate'
        color='#00aced' />
      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
      />
      <Icon
        reverse
        name='ios-american-football'
        type='ionicon'
        color='#517fa4'
      />
      <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
