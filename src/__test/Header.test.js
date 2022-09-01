import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/header/Header';

describe('Test the Header', () => {
  it('To Test the Header component renders successfully!', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
