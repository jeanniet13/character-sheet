import {
  Container,
  Grid,
  NumberInput,
  SimpleGrid,
  Space,
  Stack,
  TextInput,
  Title
} from '@mantine/core';
import './App.css'

function App() {
  return (
    <>
      <Container>
        <Grid columns={9} align='left'>
          <Grid.Col span={4}>
            <Title order={1} align="right">Dungeons & Dragons</Title>
            <Space h="md" />
            <TextInput
              inputWrapperOrder={["input", "label"]}
              placeholder="Your name"
              label="Character Name"
              size="md"
              styles={{ root: { textAlign: 'left' } }}
            />
          </Grid.Col>
          <Grid.Col span={5}>
            <SimpleGrid cols={3}>
              <div>
                <TextInput
                  inputWrapperOrder={["input", "label"]}
                  label="Class & Level"
                  styles={{ root: { textAlign: 'left' } }}
                />
              </div>
              <div>
                <TextInput
                  inputWrapperOrder={["input", "label"]}
                  label="Background"
                  styles={{ root: { textAlign: 'left' } }}
                />
              </div>
              <div>
                <TextInput
                  inputWrapperOrder={["input", "label"]}
                  label="Player Name"
                  styles={{ root: { textAlign: 'left' } }}
                />
              </div>
              <div>
                <TextInput
                  inputWrapperOrder={["input", "label"]}
                  label="Race"
                  styles={{ root: { textAlign: 'left' } }}
                />
              </div>
              <div>
                <TextInput
                  inputWrapperOrder={["input", "label"]}
                  label="Alignment"
                  styles={{ root: { textAlign: 'left' } }}
                />
              </div>
              <div>
                <TextInput
                  inputWrapperOrder={["input", "label"]}
                  label="Experience Points"
                  styles={{ root: { textAlign: 'left' } }}
                />
              </div>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
        <Space h="xl" />
        <Grid columns={9} align='left'>
          <Grid.Col span={1}>
            <Stack h={300}>
              <div>
                <NumberInput
                  label="Strength"
                  radius="xl"
                  size="xl"
                  hideControls
                  styles={{
                    label: { fontSize: '.9rem' },
                  }}
                />
                <NumberInput
                  radius="xl"
                  size="s"
                  hideControls
                  styles={{
                  }}
                />
              </div>
              <div>
                <NumberInput
                  label="Dexterity"
                  radius="xl"
                  size="xl"
                  hideControls
                  styles={{
                    label: { fontSize: '.9rem' },
                  }}
                />
                <NumberInput
                  radius="xl"
                  size="s"
                  hideControls
                  styles={{
                  }}
                />
              </div>
              <div>
                <NumberInput
                  label="Constitution"
                  radius="xl"
                  size="xl"
                  hideControls
                  styles={{
                    label: { fontSize: '.9rem' },
                  }}
                />
                <NumberInput
                  radius="xl"
                  size="s"
                  hideControls
                  styles={{
                  }}
                />
              </div>
              <div>
                <NumberInput
                  label="Intelligence"
                  radius="xl"
                  size="xl"
                  hideControls
                  styles={{
                    label: { fontSize: '.9rem' },
                  }}
                />
                <NumberInput
                  radius="xl"
                  size="s"
                  hideControls
                  styles={{
                  }}
                />
              </div>
              <div>
                <NumberInput
                  label="Wisdom"
                  radius="xl"
                  size="xl"
                  hideControls
                  styles={{
                    label: { fontSize: '.9rem' },
                  }}
                />
                <NumberInput
                  radius="xl"
                  size="s"
                  hideControls
                  styles={{
                  }}
                />
              </div>
              <div>
                <NumberInput
                  label="Charisma"
                  radius="xl"
                  size="xl"
                  hideControls
                  styles={{
                    label: { fontSize: '.9rem' },
                  }}
                />
                <NumberInput
                  radius="xl"
                  size="s"
                  hideControls
                  styles={{
                  }}
                />
              </div>
            </Stack>
          </Grid.Col>
          <Grid.Col span={2}>
          </Grid.Col>
          <Grid.Col span={3}>
          </Grid.Col>
          <Grid.Col span={3}>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default App
