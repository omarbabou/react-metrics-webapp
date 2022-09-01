import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/details/DetailsPage';

describe('Test the Details page', () => {
  it('To Test Details page renders successfully!', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
