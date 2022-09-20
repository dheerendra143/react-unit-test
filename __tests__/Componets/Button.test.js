import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/Component/Button/Button';

test('renders learn react link', () => {
  global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);
  render(<Button />);
  const linkElement = screen.getByTestId("btn-click");
  fireEvent.click(linkElement);
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toMatchSnapshot();
});