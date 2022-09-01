import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/home/WelcomePage';

describe('test the welcome page', () => {
  it('To Test welcome page renders successfully!', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Also check if routes are rendering correclty!', () => {
    const path = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(path).toMatchSnapshot();
  });
});
