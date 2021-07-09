import { renderHook, act } from '@testing-library/react-hooks';
import useHookA, { INITIAL_HOOK_STATE } from './useHookA';

test('initial hook state is correct', () => {
  expect(INITIAL_HOOK_STATE).toEqual({ data: null, isLoading: null });
});

test('should do thing', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useHookA());

  // After useEffect runs
  expect(result.current[0]).toBeNull();
  expect(result.current[1]).toBe(true);

  await waitForNextUpdate();

  // Ending state
  expect(result.current[0]).toBe('testing123');
  expect(result.current[1]).toBe(false);
});
