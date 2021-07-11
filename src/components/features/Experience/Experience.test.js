import React from 'react';
import { shallow } from 'enzyme';
import { ExperienceComponent } from './Experience';

describe('Component Experience', () => {
  it('should render without crashing', () => {
    const component = shallow(<ExperienceComponent />);
    expect(component).toBeTruthy();
  });
});
