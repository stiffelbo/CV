import React from 'react';
import { shallow } from 'enzyme';
import { EducationComponent } from './Education';

describe('Component Education', () => {
  it('should render without crashing', () => {
    const component = shallow(<EducationComponent />);
    expect(component).toBeTruthy();
  });
});
