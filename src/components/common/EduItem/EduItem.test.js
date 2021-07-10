import React from 'react';
import { shallow } from 'enzyme';
import { EduItemComponent } from './EduItem';

describe('Component EduItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<EduItemComponent />);
    expect(component).toBeTruthy();
  });
});
