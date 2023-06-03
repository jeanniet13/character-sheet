import {
  Checkbox,
  Flex,
  NumberInput,
  Text
} from '@mantine/core';

export default function SavingThrowAbility({ name }) {
  return (
    <>
      <Flex
        gap="xs"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Checkbox size="xs" />
        <NumberInput
          radius="xs"
          size="xs"
          hideControls
          variant="unstyled"
          bg="lightblue"
          w="20%"
          styles={{ input: { height: '1.25rem', minHeight: '1.25rem' }}}
        />
        <Text w="65%" align="left" size="xs">{ name }</Text>
      </Flex>
    </>
  )
}
