import {getGifs} from '../../helpers/GetGifs';

describe('tests with getGifs Fetch', () => {
	test('should return 10 elements with the api', async () => {
		const req = await getGifs('One Punch');

        expect(req.length).toBe(10);
	});

    test('should return 10 elements with the api', async () => {
		const req = await getGifs('');
        // console.log(req)

        expect(req.length).toBe(0)
	});
});
