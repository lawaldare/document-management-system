import React from 'react';
import expect from 'expect';
import '../../../setup.Tests';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('NavBar Tests', function() {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavBar />)));

  it('renders the NavBar', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders NavBar with the correct content', function() {
    let component = shallow(<NavBar />);
    expect(component.find('dms'));
    expect(component.find('li').length).toEqual(4);
    component.unmount();
  });
});
