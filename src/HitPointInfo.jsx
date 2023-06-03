import {
  Grid,
  NumberInput,
  Text
} from '@mantine/core';

export default function HitPointInfo() {
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <NumberInput
            inputWrapperOrder={['input', 'label']}
            label="Armor Class"
            radius="xs"
            size="md"
            hideControls
            styles={{}}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            inputWrapperOrder={['input', 'label']}
            label="Initiative"
            radius="xs"
            size="md"
            hideControls
            styles={{}}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            inputWrapperOrder={['input', 'label']}
            label="Speed"
            radius="xs"
            size="md"
            hideControls
            styles={{}}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <Text fz="sm">
            Maximum Hit Points
          </Text>
        </Grid.Col>
        <Grid.Col span={7}>
          <NumberInput
            radius="xs"
            size="md"
            hideControls
            styles={{}}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <NumberInput
            inputWrapperOrder={['input', 'label']}
            label="Current Hit Points"
            radius="xs"
            size="xl"
            hideControls
            styles={{}}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <NumberInput
            inputWrapperOrder={['input', 'label']}
            label="Temporary Hit Points"
            radius="xs"
            size="xl"
            hideControls
            styles={{}}
          />
        </Grid.Col>
      </Grid>
    </>
  );
}