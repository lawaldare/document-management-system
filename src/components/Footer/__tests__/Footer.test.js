import React from 'react';
import expect from 'expect';
import '../../../setup.Tests';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer Tests', function() {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Footer />)));

  it('renders the Footer', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders Footer with the correct content', function() {
    let component = shallow(<Footer />);
    expect(component.find('div'));
    expect(component.find('footer'));
    component.unmount();
  });
});
