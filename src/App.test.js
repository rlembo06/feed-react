import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { GenericActions, GenericModelState, GenericModule, GenericReducers } from "store/generic";

import App from './App';

/**
 * Store mocked
 * @type {Store<{readonly "[$CombinedState]"?: undefined} & S, AnyAction>}
 */
const store = createStore(combineReducers({
  feeds: new GenericModule('feeds', new GenericModelState(), new GenericReducers('feeds', GenericActions)).getReducers(),
}));

configure({ adapter: new Adapter() });
describe('<App />', () => {

  it('renders without crashing 2', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

});


