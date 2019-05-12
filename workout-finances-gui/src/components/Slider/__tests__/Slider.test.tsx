import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Slider from '../Slider';

describe('<Slider />', () => {
  const SliderComponent = shallow(<Slider />);
  const SliderComponentToJson = shallowToJson(SliderComponent);
  
  it('Should be equal to snapshot', () => {
    expect(SliderComponentToJson).toMatchSnapshot();
  });
});
