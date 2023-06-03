import { render, screen } from "@testing-library/react";
import PersonalityInfo from './PersonalityInfo';

describe('PersonalityInfo', () => {
  it('tests', () => {
    render(<PersonalityInfo />);
    expect(screen.getByText('Personality Traits')).toBeInTheDocument();
    expect(screen.getByText('Ideals')).toBeInTheDocument();
    expect(screen.getByText('Bonds')).toBeInTheDocument();
    expect(screen.getByText('Flaws')).toBeInTheDocument();
  })
});
