import {useRef, useState} from 'react';

enum Operation {
  add,
  rest,
  divide,
  multiply,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const operation = useRef<Operation>();
  const [prevNumber, setPrevNumber] = useState('0');

  const clean = () => {
    if (number !== '0') {
      setNumber('0');
    }
  };

  const deleteLast = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1); // 88
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1)); //
    }

    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        return setNumber(number + textNumber);
      }

      // Evaluar si es otro cero y no hay punto
      if (textNumber === '0' && number.includes('.')) {
        return setNumber(number + textNumber);
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (textNumber !== '0' && !number.includes('.')) {
        return setNumber(textNumber);
      }

      // Evitar 000000.00
      if (textNumber === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + textNumber);
    }

    setNumber(number + textNumber);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const sumNumbers = () => {
    setLastNumber();
    operation.current = Operation.add;
  };

  const restNumbers = () => {
    setLastNumber();
    operation.current = Operation.rest;
  };

  const multiplyNumbers = () => {
    setLastNumber();
    operation.current = Operation.multiply;
  };
  const divideNumbers = () => {
    setLastNumber();
    operation.current = Operation.divide;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (operation.current) {
      case Operation.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operation.rest:
        setNumber(`${num2 - num1}`);
        break;
      case Operation.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operation.divide:
        setNumber(`${num2 / num1}`);
        break;
    }

    setPrevNumber('0');
  };

  return {
    number,
    prevNumber,
    buildNumber,
    toggleSign,
    clean,
    deleteLast,
    sumNumbers,
    restNumbers,
    multiplyNumbers,
    divideNumbers,
    calculateResult,
  };
};
