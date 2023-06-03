import {
  Container,
  Flex,
  Grid,
  NumberInput,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import './App.css'
import CharacterInfo from './CharacterInfo';
import Ability from './Ability.jsx';
import HitPointInfo from './HitPointInfo.jsx';
import PersonalityInfo from './PersonalityInfo.jsx';
import SavingThrows from './SavingThrows';

function App() {
  return (
    <>
      <Container>
        <CharacterInfo/>
        <Space h="xl"/>
        <Grid columns={9} align='left'>
          <Grid.Col span={3}>
            <Grid columns={3}>
              <Grid.Col span={1}>
                <Stack bg="lightgray" p="5px">
                  <Ability name="Strength"/>
                  <Ability name="Dexterity"/>
                  <Ability name="Constitution"/>
                  <Ability name="Intelligence"/>
                  <Ability name="Wisdom"/>
                  <Ability name="Charisma"/>
                </Stack>
              </Grid.Col>
              <Grid.Col span={2}>
                <Flex
                  gap="md"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="nowrap"
                  sx={{ outlineColor: 'black', outline: 'solid', padding: '5px' }}
                >
                  <NumberInput
                    radius="xl"
                    size="md"
                    hideControls
                    w="25%"
                  />
                  <Text fz="sm" align="center" w="75%">
                    Inspiration
                  </Text>
                </Flex>
                <Space h="lg" />
                <Flex
                  gap="md"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="nowrap"
                  sx={{ outlineColor: 'black', outline: 'solid', padding: '5px' }}
                >
                  <NumberInput
                    radius="xl"
                    size="md"
                    hideControls
                    w="25%"
                  />
                  <Text fz="sm" align="center" w="75%">
                    Proficiency Bonus
                  </Text>
                </Flex>
                <Space h="lg" />
                <SavingThrows />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={3}>
            <HitPointInfo/>
          </Grid.Col>
          <Grid.Col span={3}>
            <PersonalityInfo />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default App
