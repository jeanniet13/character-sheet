import {
  Grid,
  SimpleGrid,
  Space,
  TextInput,
  Title
} from '@mantine/core';

export default function CharacterInfo() {
  return (
    <>
      <Grid columns={9} align="left">
        <Grid.Col span={4}>
          <Title order={1} align="right">Dungeons & Dragons</Title>
          <Space h="md"/>
          <TextInput
            inputWrapperOrder={['input', 'label']}
            placeholder="Your name"
            label="Character Name"
            size="md"
            styles={{ root: { textAlign: 'left' } }}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <SimpleGrid
            cols={3}
            spacing="0.3rem" verticalSpacing="0.3rem"
            sx={{ outlineColor: 'black', outline: 'solid', padding: '10px' }}
          >
            <div>
              <TextInput
                inputWrapperOrder={['input', 'label']}
                label="Class & Level"
                styles={{
                  root: { textAlign: 'left' },
                  label: { fontSize: '.75rem' },
                }}
              />
            </div>
            <div>
              <TextInput
                inputWrapperOrder={['input', 'label']}
                label="Background"
                styles={{
                  root: { textAlign: 'left' },
                  label: { fontSize: '.75rem' },
                }}
              />
            </div>
            <div>
              <TextInput
                inputWrapperOrder={['input', 'label']}
                label="Player Name"
                styles={{
                  root: { textAlign: 'left' },
                  label: { fontSize: '.75rem' },
                }}
              />
            </div>
            <div>
              <TextInput
                inputWrapperOrder={['input', 'label']}
                label="Race"
                styles={{
                  root: { textAlign: 'left' },
                  label: { fontSize: '.75rem' },
                }}
              />
            </div>
            <div>
              <TextInput
                inputWrapperOrder={['input', 'label']}
                label="Alignment"
                styles={{
                  root: { textAlign: 'left' },
                  label: { fontSize: '.75rem' },
                }}
              />
            </div>
            <div>
              <TextInput
                inputWrapperOrder={['input', 'label']}
                label="Experience Points"
                styles={{
                  root: { textAlign: 'left' },
                  label: { fontSize: '.75rem' },
                }}
              />
            </div>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </>
  );
}