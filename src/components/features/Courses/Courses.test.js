import React from 'react';
import { shallow } from 'enzyme';
import { CoursesComponent } from './Courses';

describe('Component Courses', () => {
  it('should render without crashing', () => {
    const component = shallow(<CoursesComponent />);
    expect(component).toBeTruthy();
  });
});
