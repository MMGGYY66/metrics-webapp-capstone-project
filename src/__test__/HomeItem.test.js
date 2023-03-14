import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/companiesStore';
import HomeItem from '../components/home/HomeItem';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <HomeItem />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <HomeItem title="title" />
    </Provider>,
  );

  const page = screen.getByTestId('homeitem');

  expect(page).toBeInTheDocument();
});
