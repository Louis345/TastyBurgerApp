import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const numberRange = Array(10)
  .fill()
  .map((x, i) => i);

const getPosition = (value, height) => parseInt(value, 10) * height * -1;
const getTranslateStyle = position => ({
  transform: [
    {
      translateY: position
    }
  ]
});

export default class Ticker extends Component {
  constructor(props) {
    super();
    this.animation = new Animated.Value(
      getPosition(props.value, this.state.height)
    );
  }
  state = {
    measured: false,
    height: 0,
    inProgress: false
  };

  handleLayout = e => {
    this.setState({
      measured: true,
      height: e.nativeEvent.layout.height
    });
  };

  startTicker = () => {
    const { inProgress } = this.state;
    if (!inProgress) {
      this.setState({
        inProgress: true
      });
    }
    Animated.timing(this.animation, {
      toValue: getPosition(this.props.value, this.state.height)
    }).start(() => this.props.onComplete && this.props.onComplete());
  };
  componentDidUpdate() {
    const { startTimer } = this.props;

    if (!this.state.inProgress) {
      startTimer && this.startTicker();
    }
  }
  render() {
    const { height, measured } = this.state;

    const wrappedStyle = measured ? { height } : styles.measure;
    const transformStyle = getTranslateStyle(this.animation);

    return (
      <View style={styles.container}>
        <View style={[wrappedStyle, styles.hidden]}>
          <Animated.View style={[transformStyle]}>
            {numberRange.map((v, i) => {
              return (
                <Text
                  style={[styles.text, { color: this.props.tickerColor }]}
                  key={i}
                >
                  {v}
                </Text>
              );
            })}
          </Animated.View>
        </View>
        <Text
          style={[styles.text, styles.measure]}
          onLayout={this.handleLayout}
        >
          <Text>0</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  hidden: {
    overflow: 'hidden'
  },
  text: {
    fontSize: 55
  },
  measure: {
    opacity: 0
  }
});
