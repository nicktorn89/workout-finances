import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

describe('<Main />', () => {
  it('renders Main component', () => {
    const MainComponent = shallow(<Main />);

    expect(MainComponent).toExist();
  });
});
