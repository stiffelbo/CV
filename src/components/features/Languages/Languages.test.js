import React from 'react';
import { shallow } from 'enzyme';
import { LanguagesComponent } from './Languages';

describe('Component Languages', () => {
  it('should render without crashing', () => {
    const component = shallow(<LanguagesComponent />);
    expect(component).toBeTruthy();
  });
});
