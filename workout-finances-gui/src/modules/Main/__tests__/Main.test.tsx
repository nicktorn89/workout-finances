import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';
import { shallowToJson } from 'enzyme-to-json';

describe('<Main />', () => {
  const MainComponent = shallow(<Main />);
  const MainComponentToJson = shallowToJson(MainComponent);

  it('renders Main component', () => {
    expect(MainComponent).toExist();
  });

  it('should contain only one h2 title with text - Workout Finances', () => {
    expect(MainComponent).toContainExactlyOneMatchingElement('.header-title');
  });

  it('should be equal to snapshot', () => {
    expect(MainComponentToJson).toMatchSnapshot();
  });
});
