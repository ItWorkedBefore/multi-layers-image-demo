import {renderHook, act, sleep} from '@testing-library/react-hooks';
import useLogic from './useLogic';

describe('lib > PngRandomAvatar > useLogic', () => {
  const initialValue = 0;
  it('renders', async () => {
    const {result} = renderHook(() => useLogic(initialValue));
    await act(() => sleep(500));
    expect(result.current).toMatchSnapshot();
  });
});
