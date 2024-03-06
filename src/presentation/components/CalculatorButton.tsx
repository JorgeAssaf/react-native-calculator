import {
  Pressable,
  Text,
  type PressableProps,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface CalculatorButtonProps extends PressableProps {
  text: string;
  color?: string;
  blackText?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const CalculatorButton = ({
  text,
  color,
  blackText,
  style,
  ...props
}: CalculatorButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          ...globalStyles.button,
          backgroundColor: color || colors.darkGray,
          opacity: pressed ? 0.8 : 1,
        },
        style,
      ]}
      {...props}>
      <Text
        style={[
          globalStyles.buttonText,
          {color: blackText ? 'black' : 'white'},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
