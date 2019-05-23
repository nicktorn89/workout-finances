import React from 'react';
import { shallow } from 'enzyme';
import { default as ConnectedMainComponent, Main } from '../Main';
import { shallowToJson } from 'enzyme-to-json';

describe('<Main />', () => {
  const ConnectedMain = shallow(<ConnectedMainComponent />);
  const ConnectedMainToJson = shallowToJson(ConnectedMain);
  const MainComponent = shallow(<Main />);

  it('property isActiveModal should be false by default', () => {
    expect(MainComponent.state('activeModal')).toBe(false);
  });

  it('should change state isActiveModal to true after click', () => {
    const AddWorkout = MainComponent.find('.add-workout');

    AddWorkout.simulate('click');

    expect(MainComponent.state('activeModal')).toBe(true);

    MainComponent.setState({ activeModal: false });
  });

  it('boolean properties in state should be false by default', () => {
    expect(MainComponent.state('isPersonal')).toBe(false);
    expect(MainComponent.state('isFree')).toBe(false);
    expect(MainComponent.state('isJumps')).toBe(false);
  });

  it('renders Main component', () => {
    expect(ConnectedMain).toExist();
  });

  it('should be equal to snapshot', () => {
    expect(ConnectedMainToJson).toMatchSnapshot();
  });
});
