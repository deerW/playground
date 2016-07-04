/**
 * Created by leiyouwho on 7/4/16.
 */

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';


const element = React.createElement(App, {});
render(element, document.getElementById('app'));

