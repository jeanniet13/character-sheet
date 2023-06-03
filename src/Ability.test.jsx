import { render, screen } from "@testing-library/react";
import Ability from './Ability';

describe('Ability', () => {
  it('tests', () => {
    render(<Ability name="Strength" />);
    expect(screen.getByText('Strength')).toBeInTheDocument();
  })
});

