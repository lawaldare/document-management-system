import React from 'react';
import expect from 'expect';
import '../../../setup.Tests';
import { shallow } from 'enzyme';
import LandingPage from '../LandingPage';

describe('LandingPage Tests', function() {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<LandingPage />)));

  it('renders the LandingPage', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders LandingPage with the correct content', function() {
    let component = shallow(<LandingPage />);
    expect(component.find('h2'));
    expect(component.find('h3'));
    component.unmount();
  });
});
