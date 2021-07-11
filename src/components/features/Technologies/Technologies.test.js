import React from 'react';
import { shallow } from 'enzyme';
import { TechnologiesComponent } from './Technologies';

describe('Component Technologies', () => {
  it('should render without crashing', () => {
    const component = shallow(<TechnologiesComponent />);
    expect(component).toBeTruthy();
  });
});
