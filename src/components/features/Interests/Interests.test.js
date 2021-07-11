import React from 'react';
import { shallow } from 'enzyme';
import { InterestsComponent } from './Interests';

describe('Component Interests', () => {
  it('should render without crashing', () => {
    const component = shallow(<InterestsComponent />);
    expect(component).toBeTruthy();
  });
});
