import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    buildNumber,
    toggleSign,
    divideNumbers,
    multiplyNumbers,
    restNumbers,
    sumNumbers,
    calculateResult,
    clean,
    deleteLast,
  } = useCalculator();
  return (
    <View style={globalStyles.container}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {number}
        </Text>
        <Text style={globalStyles.subResult}>
          {prevNumber === '0' ? '' : prevNumber}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <CalculatorButton
          text="C"
          color={colors.lightGray}
          blackText
          onPress={clean}
        />
        <CalculatorButton
          text="+/-"
          color={colors.lightGray}
          blackText
          onPress={toggleSign}
        />
        <CalculatorButton
          text="del"
          color={colors.lightGray}
          blackText
          onPress={deleteLast}
        />
        <CalculatorButton
          text="/"
          color={colors.orange}
          onPress={divideNumbers}
        />
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <CalculatorButton text="7" onPress={() => buildNumber('7')} />
        <CalculatorButton text="8" onPress={() => buildNumber('8')} />
        <CalculatorButton text="9" onPress={() => buildNumber('9')} />
        <CalculatorButton
          text="x"
          color={colors.orange}
          onPress={multiplyNumbers}
        />
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <CalculatorButton text="4" onPress={() => buildNumber('4')} />
        <CalculatorButton text="5" onPress={() => buildNumber('5')} />
        <CalculatorButton text="6" onPress={() => buildNumber('6')} />
        <CalculatorButton
          text="-"
          color={colors.orange}
          onPress={restNumbers}
        />
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <CalculatorButton text="1" onPress={() => buildNumber('1')} />
        <CalculatorButton text="2" onPress={() => buildNumber('2')} />
        <CalculatorButton text="3" onPress={() => buildNumber('3')} />
        <CalculatorButton text="+" color={colors.orange} onPress={sumNumbers} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <CalculatorButton
          text="0"
          style={{
            width: 180,
            paddingHorizontal: 25,
            alignItems: 'flex-start',
          }}
          onPress={() => buildNumber('0')}
        />
        <CalculatorButton text="." onPress={() => buildNumber('.')} />
        <CalculatorButton
          text="="
          color={colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
};
