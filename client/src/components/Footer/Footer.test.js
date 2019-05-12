import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let props;
  let mountedFooter;
  const setFooter = () => {
    if (!mountedFooter) {
      mountedFooter = mount(
        <Footer {...props} />,
      );
    }
    return mountedFooter.find(Footer);
  };

  beforeEach(() => {
    props = {
    };
    mountedFooter = undefined;
  });

  describe('renders without crashing', () => {
    beforeEach(() => {
    });

    it('renders', () => {
      expect(setFooter().length).toBe(1);
    });
  });
});
