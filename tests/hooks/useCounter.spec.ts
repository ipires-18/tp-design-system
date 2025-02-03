import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { expect, test } from 'vitest';

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}

test('useCounter incrementa corretamente', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
