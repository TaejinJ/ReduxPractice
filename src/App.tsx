import React from 'react';
import './App.css';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};
export default function App({ value, onIncrement, onDecrement }: Props) {
  return (
    <p>
      {/* counter: {value} time  */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </p>
  );
}
