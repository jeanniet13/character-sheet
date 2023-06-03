import { Stack, Text } from '@mantine/core';
import SavingThrowAbility from './SavingThrowAbility.jsx';

export default function SavingThrows() {
  return (
    <>
      <Stack spacing="0.3rem">
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