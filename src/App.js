import React from 'react';
import {
  Grommet,
  Header,
  Main,
  Footer,
  Anchor,
  TextInput,
  Box,
  Paragraph,
  Grid,
  Card,
  CardBody,
  Button,
  Form,
  FormField,
  Heading,
  Image,
  Text,
} from 'grommet';
import {
  Grommet as GrommetIcon,
  Search,
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
  FormNextLink,
  Github,
  Slack,
} from 'grommet-icons';
import { grommetToolsTheme } from './theme.js';
import GridCard from './components/GridCard.js';
import SmallCard from './components/SmallCard.js';

function App() {
  return (
    <Grommet className="App" theme={grommetToolsTheme}>
      <Header height="xsmall">
        <Box justify="start" direction="row" gap="small">
          <Box margin={{ left: 'medium' }} align="center">
            <GrommetIcon size="small" color="brand" />
          </Box>
          <Anchor margin="xsmall" href="#" label="Grommet Tools" />
        </Box>
        <Form>
          <Box
            background="rgba(0, 0, 0, 0.04)"
            direction="row"
            justify="center"
            round
          >
            <FormField
              margin={{ bottom: '0px', top: '0px' }}
              border={false}
              name="search input"
            >
              <TextInput a11yTitle="search bar" placeholder="Search Tools" />
            </FormField>
            <Button type="submit">
              <Search />
            </Button>
          </Box>
        </Form>
        <Box
          margin={{ right: 'large' }}
          justify="end"
          direction="row"
          gap="medium"
        >
          <Anchor href="#" label="Grommet" />
          <Anchor href="#" label="Feedback" />
        </Box>
      </Header>

      <Main>
        <Heading
          margin={{
            top: 'marginXL',
            left: 'xlarge',
            right: 'xlarge',
            bottom: '0px',
          }}
          size="xlarge"
        >
          Grommet Tools
        </Heading>
        <Box height="gradient1" background="gradient"></Box>
        <Box direction="row-responsive" justify="between">
          <Box
            margin={{
              top: 'small',
              left: 'xlarge',
              right: 'xlarge',
              bottom: 'animationBox',
            }}
            width="medium"
          >
            <Text size="xlarge">
              A suite of tools to create even more with&nbsp;
              <Text size="xlarge" color="brand">
                Grommet&nbsp;
              </Text>
              components without the stress of handling code.
            </Text>
          </Box>
          <Box
            direction="row"
            margin={{
              top: 'small',
              left: 'xlarge',
              right: 'xlarge',
            }}
          >
            <Box>
              <Card>
                <CardBody margin="small">
                  <ClearOption color="DesignerYellow" size="large" />
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardBody margin="small">
                  <CloudUpload color="PublisherPink" size="large" />
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardBody margin="small">
                  <Configure color="ThemerOrange" size="large" />
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardBody margin="small">
                  <BarChart color="TabularGreen" size="large" />
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardBody margin="small">
                  <Camera color="ImagerOrange" size="large" />
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardBody margin="small">
                  <Selection color="SlidesBlue" size="large" />
                </CardBody>
              </Card>
            </Box>
          </Box>
        </Box>

        <Box background="gradient">
          <Heading
            margin={{
              horizontal: 'xlarge',
              top: 'large',
              bottom: 'small',
            }}
            size="large"
          >
            Grommet Tool Suite
          </Heading>
          <Grid
            columns="middle"
            gap="medium"
            rows="auto"
            margin={{ horizontal: 'xlarge', vertical: 'small' }}
          >
            <GridCard
              icon={<ClearOption color="DesignerYellow" size="xlarge" />}
              heading="Designer"
              buttonColor="DesignerYellow"
              text="Grommet web-based WSIWG component editor. Use
              pubilshed themes by entering the URL in the context
              of editing the design details."
            />
            <GridCard
              icon={<Configure size="xlarge" color="ThemerOrange" />}
              heading="Themer"
              buttonColor="ThemerOrange"
              text="Grommet web-based WSIWG component editor. Use
              pubilshed themes by entering the URL in the context
              of editing the design details."
            />
            <GridCard
              icon={<Camera size="xlarge" color="ImagerOrange" />}
              heading="Images"
              buttonColor="ImagerOrange"
              text="  Super simple image hosting for your Grommet-based
                projects. Works great with Publisher, Slides, and
                Designer."
            />
            <GridCard
              icon={<CloudUpload size="xlarge" color="PublisherPink" />}
              heading="Publisher"
              buttonColor="PublisherPink"
              text="Think one part lightweight CMS,
              one part Markdown, and some special sauce
              from Grommet to make it all come together."
            />
            <GridCard
              icon={<Selection size="xlarge" color="SlidesBlue" />}
              heading="Slides"
              buttonColor="SlidesBlue"
              text="Similar to the Grommet Publisher and using
              Markdown and some shortcuts to make presenting easy,
              Slides makes presentations a breeze."
            />
            <GridCard
              icon={<BarChart size="xlarge" color="TabularGreen" />}
              heading="Tabular"
              buttonColor="TabularGreen"
              text="  If you need a table and have an API or data source,
                choose your columns and create content that is integrated
                with Grommet and the Grommet Designer."
            />
          </Grid>
        </Box>

        <Box
          margin={{
            top: 'xlarge',
            left: 'xlarge',
            right: 'xlarge',
            bottom: '0px',
          }}
          direction="row"
        >
          <Box width="medium" margin={{ bottom: 'xlarge' }}>
            <Heading>What are grommet Tools?</Heading>
            <Paragraph size="xlarge" margin={{ top: 'small' }}>
              Grommet's "No-Code" Tools assist your development experience by
              offering easy access to Grommet components with powerful branding
              capabilities.
            </Paragraph>
            <Box
              elevation="large"
              round="small"
              direction="row"
              width="medium"
              pad="medium"
            >
              <Paragraph
                margin={{
                  top: 'medium',
                  left: 'small',
                  right: 'medium',
                }}
                size="large"
              >
                Read about the power of Grommet and No Code Tools
              </Paragraph>
              <Anchor
                href="#"
                icon={<FormNextLink color="brand" size="large" />}
                alignSelf="end"
                margin="xsmall"
              />
            </Box>
          </Box>
          <Image src="RockinGremlin.svg" fit="contain" />
        </Box>

        <Box background="gradient" height="gradient3" margin="0px"></Box>

        <Box
          background="noCodeBackground"
          direction="column"
          margin="0px"
          justify="center"
          height="noCodeBox"
        >
          <Text
            size="xxlarge"
            level="2"
            alignSelf="center"
            weight={6}
            color="darkGrey"
          >
            Explore and Join the
          </Text>
          <Heading
            alignSelf="center"
            margin="xsmall"
            size="xlarge"
            color="darkGrey"
          >
            #nocodemovement.
          </Heading>
          <Box
            justify="center"
            align="center"
            direction="row"
            gap="large"
            margin={{
              top: 'medium',
              bottom: 'medium',
            }}
          >
            <SmallCard
              text="Designer"
              textColor="darkGrey"
              icon={<ClearOption size="large" color="DesignerYellow" />}
            />
            <SmallCard
              text="Themer"
              icon={<Configure size="large" color="ThemerOrange" />}
            />
            <SmallCard
              text="Images"
              icon={<Camera size="large" color="ImagerOrange" />}
            />
            <SmallCard
              text="Publisher"
              icon={<CloudUpload size="large" color="PublisherPink" />}
            />
            <SmallCard
              text="Slides"
              icon={<Configure size="large" color="SlidesBlue" />}
            />
            <SmallCard
              text="Tabular"
              icon={<BarChart size="large" color="TabularGreen" />}
            />
          </Box>
          <Box justify="center" direction="row" gap="large">
            <Anchor
              color="darkGrey"
              href="#"
              icon={<Slack />}
              label="Grommet on Slack"
            />
            <Anchor
              color="darkGrey"
              href="#"
              icon={<Github />}
              label="Share feedback on Github"
            />
          </Box>
        </Box>
      </Main>

      <Footer>Footer</Footer>
    </Grommet>
  );
}
export default App;
