import { render, screen } from "@testing-library/react";
import HitPointInfo from './HitPointInfo';

describe('HitPointInfo', () => {
  it('tests', () => {
    render(<HitPointInfo />);
    expect(screen.getByText('Armor Class')).toBeInTheDocument();
    expect(screen.getByText('Initiative')).toBeInTheDocument();
    expect(screen.getByText('Speed')).toBeInTheDocument();
    expect(screen.getByText('Maximum Hit Points')).toBeInTheDocument();
    expect(screen.getByText('Current Hit Points')).toBeInTheDocument();
    expect(screen.getByText('Temporary Hit Points')).toBeInTheDocument();
  })
});
