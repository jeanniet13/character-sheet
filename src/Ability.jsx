import {
  NumberInput,
  Space,
} from '@mantine/core';

export default function Ability({ name }) {
  return (
    <>
      <div>
        <NumberInput
          label={ name }
          radius="xl"
          size="xl"
          hideControls
          styles={{
            label: { fontSize: '.75rem', fontWeight: 'bold' },
          }}
        />
        <Space h="0.5rem"/>
        <NumberInput
          radius="xl"
          size="s"
          hideControls
          styles={{}}
        />
      </div>
    </>
  );
}