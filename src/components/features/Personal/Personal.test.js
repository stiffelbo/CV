import React from 'react';
import { shallow } from 'enzyme';
import { PersonalComponent } from './Personal';

describe('Component Personal', () => {
  it('should render without crashing', () => {
    const component = shallow(<PersonalComponent />);
    expect(component).toBeTruthy();
  });
});
