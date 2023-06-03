import { Stack, Text } from '@mantine/core';
import SavingThrowAbility from './SavingThrowAbility.jsx';

export default function SavingThrows() {
  return (
    <>
      <Stack
        spacing="0.3rem"
        sx={{ outlineColor: 'black', outline: 'solid', padding: '5px' }}
      >
        <SavingThrowAbility name="Strength" />
        <SavingThrowAbility name="Dexterity" />
        <SavingThrowAbility name="Constitution" />
        <SavingThrowAbility name="Intelligence" />
        <SavingThrowAbility name="Wisdom" />
        <SavingThrowAbility name="Charisma" />
        <Text>Saving Throws</Text>
      </Stack>
    </>
  )
}