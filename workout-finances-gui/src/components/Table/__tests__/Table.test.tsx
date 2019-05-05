import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Table from '../Table';

describe('<Slider />', () => {
  const TableComponent = shallow(<Table data={[]} />);
  const TableComponentToJson = shallowToJson(TableComponent);
  
  it('Should be equal to snapshot', () => {
    expect(TableComponentToJson).toMatchSnapshot();
  });
});
