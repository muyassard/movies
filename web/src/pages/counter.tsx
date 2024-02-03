import { Button, Tag } from 'antd';
import React from 'react';

const useCounter = (initialValue = 1) => {
  const [count, setCount] = React.useState(initialValue);

  const methods = {
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1),
    reset: () => setCount(initialValue)
  };

  return [count, methods] as const;
};

const Counter: React.FC = () => {
  const initialValue = 2;
  const [count, { increment, decrement, reset }] = useCounter(initialValue);
  
  return (
    <div className="container mx-auto flex gap-2 p-4">
      <Tag className="grid place-items-center">{count}</Tag>
      <Button.Group>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement} disabled={count === 0}>
          Decrement
        </Button>
        <Button onClick={reset} disabled={count === initialValue}>
          Reset
        </Button>
      </Button.Group>
    </div>
  );
};

export default Counter;
