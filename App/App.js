import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  const toggle = false;

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <Image source={require()} />;
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
