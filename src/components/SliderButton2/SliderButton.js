import React, {Component} from 'react';
import {View, Text, Animated, PanResponder, Dimensions} from 'react-native';
import {styles} from './style';
const {width: totalWidth} = Dimensions.get('window');
export default class SliderButton extends Component {
  constructor(props) {
    super(props);
    this._value = {x: 0, y: 0};
    this.pan = new Animated.ValueXY({x: 0, y: 0});
    this.state = {
      value: false,
      xVal: 0,
    };
  }

  componentWillMount() {
    this.pan.addListener((value) => {
      this._value = value;
      this.props.onSlider(value.x);
    });

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        gestureState.dx != 0 && gestureState.dy != 0,

      onPanResponderGrant: () => {
        this.pan.setOffset({x: this._value.x, y: this._value.y});
        this.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.pan.x,
          dy: 0,
        },
      ]),
      onPanResponderRelease: () => {
        this.pan.flattenOffset();

        const {x, y} = this._value;
        Animated.timing(this.pan, {
          toValue: {
            x: x > (totalWidth - 80) / 4 ? (totalWidth - 80) / 2 : 0,
            y,
          },
          duration: 400,
        }).start(() => {
          // animation finished
        });
      },
    });
  }

  render() {
    const {
      cursorHeight,
      cursorWidth,
      sliderBarWidth,
      sliderBarHeight,
    } = this.props;
    return (
      <View>
        <View
          style={
            ([styles.container],
            {height: sliderBarHeight, width: sliderBarWidth})
          }>
          <View
            style={[
              styles.draggableContainer,
              {height: sliderBarHeight, width: sliderBarWidth},
            ]}>
            <Animated.View
              {...this.panResponder.panHandlers}
              style={[
                this.pan.getLayout(),
                styles.cursor,
                {width: cursorWidth, height: cursorHeight},
              ]}>
              <Text />
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }
}
