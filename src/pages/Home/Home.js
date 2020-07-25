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
  ResponsiveContext,
  Main,
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
    <Main>
      <Heading
        level={1}
        margin={{
          top: 'marginXL',
          left: 'xlarge',
          right: 'xlarge',
          bottom: 'none',
        }}
        size="xlarge"
      >
        Grommet Tools
      </Heading>
      <Box pad="xsmall" background="gradient"></Box>
      <Box direction="row" justify="between">
        <Box
          margin={{
            top: 'small',
            left: 'xlarge',
            right: 'medium',
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
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive !== 'small' && responsive !== 'xsmall' ? (
              <Box
                margin={
                  responsive === 'medium'
                    ? {
                        top: 'small',
                        left: 'small',
                        right: 'xlarge',
                        bottom: 'large',
                      }
                    : {
                        top: 'small',
                        left: 'small',
                        right: '300px',
                        bottom: 'large',
                      }
                }
                pad={{ right: 'xlarge' }}
                justify="around"
              >
                <Box direction="row" gap={responsive}>
                  <Card
                    margin={
                      responsive === 'medium'
                        ? { right: 'large' }
                        : { right: 'xlarge' }
                    }
                    animation={{ type: 'jiggle', duration: 1000 }}
                    onClick={() =>
                      window.open('https://designer.grommet.io', '_self')
                    }
                  >
                    <CardBody margin="small">
                      <ClearOption color="DesignerYellow" size="large" />
                    </CardBody>
                  </Card>
                  <Card
                    margin={{ left: 'large' }}
                    animation={{ type: 'jiggle', duration: 1000, delay: 1000 }}
                    onClick={() =>
                      window.open('https://publisher.grommet.io', '_self')
                    }
                  >
                    <CardBody margin="small">
                      <Configure color="ThemerOrange" size="large" />
                    </CardBody>
                  </Card>
                </Box>
                <Box direction="row" pad={{ left: 'large', right: 'large' }}>
                  <Card
                    alignSelf="center"
                    margin={{ horizontal: responsive }}
                    animation={{ type: 'jiggle', duration: 1000, delay: 750 }}
                    onClick={() =>
                      window.open('https://theme-designer.grommet.io', '_self')
                    }
                  >
                    <CardBody margin="small">
                      <CloudUpload color="PublisherPink" size="large" />
                    </CardBody>
                  </Card>
                </Box>
                <Box
                  direction="row"
                  gap={responsive}
                  margin={{ bottom: 'small' }}
                >
                  <Card
                    animation={{ type: 'jiggle', duration: 1000, delay: 400 }}
                    margin={{ right: 'large' }}
                    onClick={() =>
                      window.open('https://slides.grommet.io', '_self')
                    }
                  >
                    <CardBody margin="small">
                      <Selection color="SlidesBlue" size="large" />
                    </CardBody>
                  </Card>
                  <Card
                    alignSelf="center"
                    margin={{ left: 'large' }}
                    animation={{ type: 'jiggle', duration: 1000, delay: 600 }}
                    onClick={() =>
                      window.open('https://tabular.grommet.io', '_self')
                    }
                  >
                    <CardBody margin="small">
                      <BarChart color="TabularGreen" size="large" />
                    </CardBody>
                  </Card>
                </Box>
                <Box>
                  <Card
                    alignSelf="center"
                    animation={{ type: 'jiggle', duration: 1000, delay: 550 }}
                    onClick={() =>
                      window.open('https://images.grommet.io', '_self')
                    }
                  >
                    <CardBody margin="small">
                      <Camera color="ImagerOrange" size="large" />
                    </CardBody>
                  </Card>
                </Box>
              </Box>
            ) : null
          }
        </ResponsiveContext.Consumer>
      </Box>

      <Box background="gradient">
        <Heading
          level={2}
          margin={{
            horizontal: 'xlarge',
            top: 'large',
            bottom: 'small',
          }}
          size="xlarge"
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
            heading="Open Designer"
            buttonColor="DesignerYellow"
            learnLink="/Designer"
            openLink="https://designer.grommet.io/"
            text="Grommet web-based WSIWG component editor. Use
  pubilshed themes by entering the URL in the context
  of editing the design details."
          />
          <GridCard
            icon={<Configure size="xlarge" color="ThemerOrange" />}
            heading="Open Themer"
            buttonColor="ThemerOrange"
            openLink="https://theme-designer.grommet.io/"
            text="Grommet web-based WSIWG component editor. Use
  pubilshed themes by entering the URL in the context
  of editing the design details."
          />
          <GridCard
            icon={<Camera size="xlarge" color="ImagerOrange" />}
            heading="Open Images"
            buttonColor="ImagerOrange"
            openLink="https://images.grommet.io/"
            text="  Super simple image hosting for your Grommet-based
  projects. Works great with Publisher, Slides, and
  Designer."
          />
          <GridCard
            icon={<CloudUpload size="xlarge" color="PublisherPink" />}
            heading="Open Publisher"
            buttonColor="PublisherPink"
            openLink="https://publisher.grommet.io/"
            text="Think one part lightweight CMS,
  one part Markdown, and some special sauce
  from Grommet to make it all come together."
          />
          <GridCard
            icon={<Selection size="xlarge" color="SlidesBlue" />}
            heading="Open Slides"
            buttonColor="SlidesBlue"
            openLink="https://slides.grommet.io/"
            text="Similar to the Grommet Publisher and using
  Markdown and some shortcuts to make presenting easy,
  Slides makes presentations a breeze."
          />
          <GridCard
            icon={<BarChart size="xlarge" color="TabularGreen" />}
            heading="Open Tabular"
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
          horizontal: 'xlarge',
          bottom: 'none',
        }}
        direction="row-responsive"
        align="end"
        gap="xlarge"
      >
        <Box alignSelf="center" margin={{ bottom: 'xlarge' }}>
          <Heading level={2} size="xlarge">
            What are Grommet Tools?
          </Heading>
          <Paragraph size="xlarge" margin={{ top: 'xsmall' }}>
            Grommet's "No-Code" Tools assist your development experience by
            offering easy access to Grommet components with powerful branding
            capabilities.
          </Paragraph>
          <Box
            margin={{ top: 'small' }}
            elevation="large"
            round="medium"
            direction="row"
            width="medium"
            pad="small"
          >
            <Paragraph
              margin={{
                top: 'medium',
                left: 'small',
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
        <Box>
          <Image
            a11yTitle="Rockin Gremlin"
            fill="horizontal"
            alignSelf="end"
            src="RockinGremlin.svg"
            fit="contain"
          />
        </Box>
      </Box>

      <Box background="gradient" pad="small" margin="none"></Box>

      <Box background="noCodeBackground" direction="column" justify="center">
        <Text
          size="xxlarge"
          level="2"
          alignSelf="center"
          weight={6}
          color="darkGrey"
          margin={{ top: 'xlarge' }}
        >
          Explore and Join the
        </Text>
        <Heading
          level={2}
          alignSelf="center"
          margin="xsmall"
          size="xlarge"
          color="darkGrey"
        >
          #nocodemovement.
        </Heading>

        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === 'small' ? (
              <Box
                justify="center"
                align="center"
                direction="row"
                gap="small"
                margin={{
                  horizontal: 'small',
                  top: 'small',
                  bottom: 'large',
                }}
              >
                <SmallCard
                  icon={
                    <ClearOption size="customSmall" color="DesignerYellow" />
                  }
                />
                <SmallCard
                  icon={<Configure size="customSmall" color="ThemerOrange" />}
                />
                <SmallCard
                  icon={<Camera size="customSmall" color="ImagerOrange" />}
                />
                <SmallCard
                  icon={
                    <CloudUpload size="customSmall" color="PublisherPink" />
                  }
                />
                <SmallCard
                  icon={<Selection size="customSmall" color="SlidesBlue" />}
                />
                <SmallCard
                  icon={<BarChart size="customSmall" color="TabularGreen" />}
                />
              </Box>
            ) : (
              <Box
                justify="center"
                align="center"
                direction="row"
                gap="large"
                margin={{
                  horizontal: 'small',
                  vertical: 'medium',
                }}
              >
                <SmallCard
                  text="Designer"
                  textColor="darkGrey"
                  size="xsmall"
                  icon={<ClearOption size="large" color="DesignerYellow" />}
                />
                <SmallCard
                  text="Themer"
                  textColor="darkGrey"
                  size="xsmall"
                  icon={<Configure size="large" color="ThemerOrange" />}
                />
                <SmallCard
                  text="Images"
                  textColor="darkGrey"
                  size="xsmall"
                  icon={<Camera size="large" color="ImagerOrange" />}
                />
                <SmallCard
                  text="Publisher"
                  textColor="darkGrey"
                  size="xsmall"
                  icon={<CloudUpload size="large" color="PublisherPink" />}
                />
                <SmallCard
                  text="Slides"
                  textColor="darkGrey"
                  size="xsmall"
                  icon={<Selection size="large" color="SlidesBlue" />}
                />
                <SmallCard
                  text="Tabular"
                  textColor="darkGrey"
                  size="xsmall"
                  icon={<BarChart size="large" color="TabularGreen" />}
                />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>

        <Box
          margin={{ bottom: 'xlarge' }}
          justify="center"
          direction="row"
          gap="large"
        >
          <Anchor
            href="https://slackin.grommet.io/"
            icon={<Slack />}
            label="Grommet on Slack"
          />
          <Anchor
            href="https://github.com/grommet/"
            icon={<Github />}
            label="Share feedback on Github"
          />
        </Box>
      </Box>
    </Main>
  </Box>
);

export default Home;
