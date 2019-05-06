import React from 'react';
import {
  Animated,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
export default class SlidingPanel extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  openPanel = () => {
    Animated.spring(this.state.animation, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true
    }).start();
  };

  closePanel = () => {
    Animated.spring(this.state.animation, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { animatePanel } = this.props;
    animatePanel ? this.openPanel() : this.closePanel();
    const animatedStyles = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, (-1 * screenHeight) / 2],
            extrapolate: 'clamp'
          })
        }
      ]
    };
    return (
      <View style={styles.sheet}>
        <Animated.View style={[styles.popup, animatedStyles]}>
          <View style={{ flex: 1 }}>{this.props.children}</View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 400,
    marginBottom: 36,
    borderRadius: 10,
    marginTop: 20
  },
  sheet: {
    position: 'absolute',
    borderRadius: 4,
    top: Dimensions.get('window').height - 120,
    left: 0,
    right: 0,
    flex: 1
  },
  popup: {
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minHeight: screenHeight,
    backgroundColor: '#fff'
  }
});
