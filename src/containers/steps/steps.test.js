import React from 'react'

import Steps from './steps'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
  shallow(<Steps />);
});