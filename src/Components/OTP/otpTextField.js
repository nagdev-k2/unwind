import React, {PureComponent} from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../Constants/colors';

class OTPTextView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: 0,
      otpText: [],
    };
    this.inputs = [];
  }

  componentDidMount() {
    const {defaultValue, cellTextLength} = this.props;
    this.otpText = defaultValue.match(
      new RegExp(`.{1, ${cellTextLength} }`, 'g'),
    );
  }

  onTextChange = (text, i) => {
    const {cellTextLength, inputCount, handleTextChange} = this.props;
    this.setState(
      (prevState) => {
        const {otpText} = prevState;
        otpText[i] = text;
        return otpText;
      },
      () => {
        handleTextChange(this.state.otpText.join(''));
        if (text.length === cellTextLength && i !== inputCount - 1) {
          this.inputs[i + 1].focus();
        }
      },
    );
  };

  onInputFocus = (i) => {
    this.setState({focusedInput: i});
  };

  onKeyPress = (e, i) => {
    const {otpText = []} = this.state;
    // Since otpText[i] is undefined, The clear operation is not functional
    if (e.nativeEvent.key === 'Backspace' && i !== 0 && !otpText[i]) {
      this.inputs[i - 1].focus();
    }
  };

  render() {
    const {focusedInput} = this.state;
    const {
      inputCount,
      offTintColor,
      tintColor,
      defaultValue,
      cellTextLength,
      containerStyle,
      textInputStyle,
      ...textInputProps
    } = this.props;

    const TextInputs = [];

    for (let i = 0; i < inputCount; i += 1) {
      let defaultChars = [];
      if (defaultValue) {
        defaultChars = defaultValue.match(
          new RegExp(`.{1, ${cellTextLength} }`, 'g'),
        );
      }
      const inputStyle = [styles.otpTextInput, textInputStyle];
      if (i === 3) inputStyle.push({borderRightWidth: 0});
      if (focusedInput === i)
        inputStyle.push({borderColor: colors.borderActive});

      TextInputs.push(
        <TextInput
          ref={(e) => {
            this.inputs[i] = e;
          }}
          key={i}
          defaultValue={defaultValue ? defaultChars[i] : '0'}
          style={inputStyle}
          maxLength={cellTextLength}
          onFocus={() => this.onInputFocus(i)}
          onChangeText={(text) => this.onTextChange(text, i)}
          multiline={false}
          onKeyPress={(e) => this.onKeyPress(e, i)}
          {...textInputProps}
        />,
      );
    }
    return (
      <View style={[styles.otpContainer, containerStyle]}>{TextInputs}</View>
    );
  }
}

OTPTextView.propTypes = {
  defaultValue: PropTypes.string,
  inputCount: PropTypes.number,
  containerStyle: PropTypes.instanceOf(Object),
  textInputStyle: PropTypes.instanceOf(Object),
  cellTextLength: PropTypes.number,
  tintColor: PropTypes.string,
  offTintColor: PropTypes.string,
  handleTextChange: PropTypes.func,
  inputType: PropTypes.string,
};

OTPTextView.defaultProps = {
  defaultValue: '',
  inputCount: 4,
  tintColor: '#3CB371',
  offTintColor: '#DCDCDC',
  cellTextLength: 1,
  containerStyle: {},
  textInputStyle: {},
  inputType: '',
  handleTextChange: () => {},
};

export default OTPTextView;
