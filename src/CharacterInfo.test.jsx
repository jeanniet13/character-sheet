import { render, screen } from "@testing-library/react";
import CharacterInfo from './CharacterInfo';

describe('CharacterInfo', () => {
  it('tests', () => {
    render(<CharacterInfo />);
    expect(screen.getByText('Class & Level')).toBeInTheDocument();
    expect(screen.getByText('Background')).toBeInTheDocument();
    expect(screen.getByText('Player Name')).toBeInTheDocument();
    expect(screen.getByText('Race')).toBeInTheDocument();
    expect(screen.getByText('Alignment')).toBeInTheDocument();
    expect(screen.getByText('Experience Points')).toBeInTheDocument();
  })
});
