import {useFetchGifs} from '../../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Tests in the custom hook useFetchGif', () => {
	test('should return the initial state', async () => {
        //el render hook lo utilizamos para poder probar custom hooks, tenemos que importarlo desde una libreria externa que instalamos como dependencia de desarrollo.
		const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One punch'));
		const {data, loading} = result.current;

        await waitForNextUpdate();
		expect(data).toEqual([]);
		expect(loading).toBeTruthy();
	});

    test('should return an array of images and the loading on false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBeFalsy();
    });
});
