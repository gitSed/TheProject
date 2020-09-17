import React from 'react';

/* Third-Party */
import { shallow } from 'enzyme';

/* Own */
import GifGridItem from '.';

describe('Testing <GifGridItem />', () => {
  const title = 'Un titulo';
  const url = 'https://localhost.com';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Paragraph render', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test('Image render', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('ClassName animate__fadeIn', () => {
    const div = wrapper.find('div');

    expect(div.hasClass('animate__fadeIn')).toBe(true);
  });
});
