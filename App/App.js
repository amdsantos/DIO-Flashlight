import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    // Liga flesh do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    // Quando celular for chacoalhado, mudara o toggle
    const subscripition = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    // Essa function é chamada quando o componente for desmontado
    return () => subscripition.remove();
  });

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightOn : style.lightOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={style.logoDio}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
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
  lightOn: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  lightOff: {
    width: 150,
    height: 150,
    tintColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoDio: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});
