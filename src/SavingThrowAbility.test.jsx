import { render, screen } from "@testing-library/react";
import SavingThrowAbility from './SavingThrowAbility';

describe('SavingThrowAbility', () => {
  it('tests', () => {
    render(<SavingThrowAbility name="Strength" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Strength')).toBeInTheDocument();
  })
});
