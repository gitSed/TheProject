import React from 'react';

/* Third-Party */
import { shallow } from 'enzyme';

/* Own */
import { getGifs } from './getGifs';

describe('getGifs', () => {
  test('Should return 10 elements', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  test('Should show exception', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
