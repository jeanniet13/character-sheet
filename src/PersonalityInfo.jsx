import {
  Stack,
  Textarea
} from '@mantine/core';

export default function PersonalityInfo() {
  return <>
    <Stack p="10px" spacing="0.3rem" bg="lightgray">
      <Textarea
        inputWrapperOrder={['input', 'label']}
        label="Personality Traits"
        autosize
        minRows={3}
        maxRows={3}
        styles={{
          label: { fontSize: '.75rem', fontWeight: 'bold' },
          root: { outlineColor: 'black', outline: 'solid' }
        }}
      />
      <Textarea
        inputWrapperOrder={['input', 'label']}
        label="Ideals"
        autosize
        minRows={2}
        maxRows={2}
        styles={{
          label: { fontSize: '.75rem', fontWeight: 'bold' },
          root: { outlineColor: 'black', outline: 'solid' }
        }}
      />
      <Textarea
        inputWrapperOrder={['input', 'label']}
        label="Bonds"
        autosize
        minRows={2}
        maxRows={2}
        styles={{
          label: { fontSize: '.75rem', fontWeight: 'bold' },
          root: { outlineColor: 'black', outline: 'solid' }
        }}
      />
      <Textarea
        inputWrapperOrder={['input', 'label']}
        label="Flaws"
        autosize
        minRows={2}
        maxRows={2}
        styles={{
          label: { fontSize: '.75rem', fontWeight: 'bold' },
          root: { outlineColor: 'black', outline: 'solid' }
        }}
      />
    </Stack>
  </>;
}