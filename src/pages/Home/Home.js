import React from 'react';
import {
  Anchor,
  Box,
  Paragraph,
  Grid,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from 'grommet';
import {
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
import GridCard from '../../components/GridCard.js';
import SmallCard from '../../components/SmallCard.js';
import AppHeader from '../../components/AppHeader.js';

const Home = (props) => (
  <Box>
    <AppHeader />
    <Heading
      margin={{
        top: 'marginXL',
        left: 'xlarge',
        right: 'xlarge',
        bottom: 'none',
      }}
      size="customLarge"
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
              <ClearOption color="DesignerYellow" size="customLarge" />
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody margin="small">
              <CloudUpload color="PublisherPink" size="customLarge" />
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody margin="small">
              <Configure color="ThemerOrange" size="customLarge" />
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody margin="small">
              <BarChart color="TabularGreen" size="customLarge" />
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody margin="small">
              <Camera color="ImagerOrange" size="customLarge" />
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody margin="small">
              <Selection color="SlidesBlue" size="customLarge" />
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
        size="customMedium"
      >
        Grommet Tool Suite
      </Heading>
      <Grid
        columns={{ count: 'fill', size: 'medium' }}
        gap="medium"
        rows="auto"
        margin={{ horizontal: 'xlarge', vertical: 'small' }}
      >
        <GridCard
          icon={<ClearOption color="DesignerYellow" size="xlarge" />}
          heading="Designer"
          buttonColor="DesignerYellow"
          learnLink="/Designer"
          openLink="https://designer.grommet.io/"
          text="Grommet web-based WSIWG component editor. Use
pubilshed themes by entering the URL in the context
of editing the design details."
        />
        <GridCard
          icon={<Configure size="xlarge" color="ThemerOrange" />}
          heading="Themer"
          buttonColor="ThemerOrange"
          openLink="https://theme-designer.grommet.io/"
          text="Grommet web-based WSIWG component editor. Use
pubilshed themes by entering the URL in the context
of editing the design details."
        />
        <GridCard
          icon={<Camera size="xlarge" color="ImagerOrange" />}
          heading="Images"
          buttonColor="ImagerOrange"
          openLink="https://images.grommet.io/"
          text="  Super simple image hosting for your Grommet-based
projects. Works great with Publisher, Slides, and
Designer."
        />
        <GridCard
          icon={<CloudUpload size="xlarge" color="PublisherPink" />}
          heading="Publisher"
          buttonColor="PublisherPink"
          openLink="https://publisher.grommet.io/"
          text="Think one part lightweight CMS,
one part Markdown, and some special sauce
from Grommet to make it all come together."
        />
        <GridCard
          icon={<Selection size="xlarge" color="SlidesBlue" />}
          heading="Slides"
          buttonColor="SlidesBlue"
          openLink="https://slides.grommet.io/"
          text="Similar to the Grommet Publisher and using
Markdown and some shortcuts to make presenting easy,
Slides makes presentations a breeze."
        />
        <GridCard
          icon={<BarChart size="xlarge" color="TabularGreen" />}
          heading="Tabular"
          buttonColor="TabularGreen"
          openLink="https://tabular.grommet.io/"
          text="  If you need a table and have an API or data source,
choose your columns and create content that is integrated
with Grommet and the Grommet Designer."
        />
      </Grid>
    </Box>

    <Box
      margin={{
        top: 'xlarge',
        bottom: 'none',
      }}
      direction="row-responsive"
      align="end"
    >
      <Box size="large" margin={{ horizontal: 'xlarge', bottom: 'xlarge' }}>
        <Heading level={2} size="xlarge">
          What are grommet Tools?
        </Heading>
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
      <Box size="medium" margin={{ horizontal: 'xlarge' }}>
        <Image
          fill="horizontal"
          alignSelf="end"
          src="RockinGremlin.svg"
          fit="contain"
        />
      </Box>
    </Box>

    <Box background="gradient" height="gradient3" margin="none"></Box>

    <Box
      background="noCodeBackground"
      direction="column"
      margin="none"
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
          textColor="darkGrey"
          icon={<Configure size="large" color="ThemerOrange" />}
        />
        <SmallCard
          text="Images"
          textColor="darkGrey"
          icon={<Camera size="large" color="ImagerOrange" />}
        />
        <SmallCard
          text="Publisher"
          textColor="darkGrey"
          icon={<CloudUpload size="large" color="PublisherPink" />}
        />
        <SmallCard
          text="Slides"
          textColor="darkGrey"
          icon={<Configure size="large" color="SlidesBlue" />}
        />
        <SmallCard
          text="Tabular"
          textColor="darkGrey"
          icon={<BarChart size="large" color="TabularGreen" />}
        />
      </Box>
      <Box justify="center" direction="row" gap="large">
        <Anchor href="#" icon={<Slack />} label="Grommet on Slack" />
        <Anchor href="#" icon={<Github />} label="Share feedback on Github" />
      </Box>
    </Box>
  </Box>
);

export default Home;
