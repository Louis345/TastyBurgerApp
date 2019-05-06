import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import Ticker from './components/Ticker/Ticker';
import Item from './components/Item/Item';
import Images from './util/Images';

import SlidingPanel from './components/SlidingPanel/SlidingPanel';
const Sides = ['cheese', 'meat', 'lettuce', 'cheese', 'meat', 'lettuce'];
export default class App extends React.Component {
  state = {
    animatePanel: false
  };
  openMenu = () => {
    this.setState({
      animatePanel: !this.state.animatePanel
    });
  };

  render() {
    const { animatePanel } = this.state;
    return (
      <ImageBackground
        source={require('./assets/burger.png')}
        style={styles.ImageBackground}
      >
        <View style={styles.container}>
          <View style={{ flex: 0.5 }}>
            <Text style={{ color: '#fff', fontSize: 50 }}>Cheese</Text>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row'
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 50
                }}
              >
                Burger
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  alignItems: 'center'
                }}
              >
                <Ticker
                  value={4}
                  startTimer
                  onComplete={this.onComplete}
                  tickerColor={'#FFDA02'}
                />
                <Ticker
                  value={4}
                  startTimer
                  onComplete={this.onComplete}
                  tickerColor={'#FFDA02'}
                />
              </View>
            </View>
          </View>
        </View>
        <View />
        <SlidingPanel animatePanel={animatePanel}>
          <View style={styles.SlidingPanelContainer}>
            <View
              style={{
                flex: 0.09,
                backgroundColor: '#fff',
                flexDirection: 'row'
              }}
            >
              <View style={{ flex: 0.5 }}>
                <Text style={styles.panelText}>Ingredients</Text>
              </View>
              <Entypo
                name={!animatePanel ? 'chevron-thin-up' : 'chevron-thin-down'}
                size={42}
                color={'#ddd'}
              />
            </View>

            <View
              style={{
                flex: 0.3,
                backgroundColor: '',
                alignItems: 'center'
              }}
            >
              <ScrollView horizontal>
                {Sides.map((Side, index) => {
                  return (
                    <View style={styles.sidesContainer} key={index}>
                      <View style={styles.imageContainer}>
                        <Avatar
                          rounded
                          source={Images[Side]}
                          title={Side}
                          size="medium"
                          titleSize={20}
                        />
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View style={{ flex: 0.3 }}>
              <Item Items={Sides} />
            </View>
          </View>
        </SlidingPanel>

        <SafeAreaView>
          <View style={styles.buttonContainer}>
            <Button
              title="Add To Cart"
              buttonStyle={{ backgroundColor: '#FFDA02', zIndex: 1000 }}
              titleStyle={{ color: 'black', fontSize: 20 }}
              onPress={this.openMenu}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center'
  },
  SlidingPanel: {
    flex: 1
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  ImageBackground: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10
  },
  headerContainer: {
    flexDirection: 'row',
    flex: 0.5
  },
  panelText: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'left'
  },
  itemPanel: {
    flexDirection: 'column',
    flex: 0.5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});
