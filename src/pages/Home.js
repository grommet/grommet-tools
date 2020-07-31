import React from 'react';
import {
  Anchor,
  Box,
  Paragraph,
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
import { AppHeader, HomeGrid, SmallCard, RotatedIcon } from '../components';

const Home = (props) => (
  <Box>
    <AppHeader />
    <Main>
      <Heading
        level={1}
        margin={{
          top: 'xlarge',
          left: 'xlarge',
          right: 'xlarge',
          bottom: 'medium',
        }}
        size="xlarge"
      >
        Grommet Tools
      </Heading>
      <Box pad="xsmall" background="gradient"></Box>
      <Box direction="row" justify="between">
        <Box
          margin={{
            // top: 'small',
            left: 'xlarge',
            right: 'medium',
            bottom: 'large',
          }}
        >
          <Paragraph size="xxlarge">
            A suite of tools to create even more with&#32;&#8203;
            <Anchor label="Grommet" href="https://v2.grommet.io/" />
            &#8203;&#32;components without the stress of handling code.
          </Paragraph>
        </Box>
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === 'medium' ||
            responsive === 'large' ||
            responsive === 'xlarge' ? (
              <Box
                margin={
                  responsive === 'medium'
                    ? {
                        top: 'small',
                        left: 'small',
                        right: 'small',
                        bottom: 'large',
                      }
                    : {
                        top: 'small',
                        left: 'small',
                        right: 'xlarge',
                        bottom: 'large',
                      }
                }
                pad={{ right: 'xlarge' }}
              >
                <Box direction="row" gap={responsive}>
                  <RotatedIcon
                    rotate="rotate(-5.79deg)"
                    margin="30px 0px -20px 0px"
                  >
                    <Card
                      margin={
                        responsive === 'medium'
                          ? { right: 'large' }
                          : { right: 'xlarge' }
                      }
                      animation={{ type: 'jiggle', duration: 2000 }}
                      onClick={() =>
                        window.open('https://designer.grommet.io', '_self')
                      }
                    >
                      <CardBody margin="small">
                        <ClearOption color="DesignerYellow" size="large" />
                      </CardBody>
                    </Card>
                  </RotatedIcon>
                  <RotatedIcon
                    rotate="rotate(2.79deg)"
                    margin="5px 0px 0px 0px"
                  >
                    <Card
                      margin={{ left: 'large' }}
                      animation={{
                        type: 'jiggle',
                        duration: 1100,
                        delay: 1000,
                      }}
                      onClick={() =>
                        window.open('https://publisher.grommet.io', '_self')
                      }
                    >
                      <CardBody margin="small">
                        <Configure color="ThemerOrange" size="large" />
                      </CardBody>
                    </Card>
                  </RotatedIcon>
                </Box>
                <Box direction="row" pad={{ left: 'large', right: 'large' }}>
                  <RotatedIcon
                    rotate="rotate(9.22deg)"
                    margin="10px 0px 0px 30px"
                  >
                    <Card
                      alignSelf="center"
                      margin={{ horizontal: responsive }}
                      animation={{ type: 'jiggle', duration: 2200, delay: 750 }}
                      onClick={() =>
                        window.open(
                          'https://theme-designer.grommet.io',
                          '_self',
                        )
                      }
                    >
                      <CardBody margin="small">
                        <CloudUpload color="PublisherPink" size="large" />
                      </CardBody>
                    </Card>
                  </RotatedIcon>
                </Box>
                <Box
                  direction="row"
                  gap={responsive}
                  margin={{ bottom: 'small' }}
                >
                  <RotatedIcon margin="10px 0px 0px -20px">
                    <Card
                      animation={{ type: 'jiggle', duration: 1000, delay: 400 }}
                      margin={{ right: 'large' }}
                      onClick={() =>
                        window.open('https://tabular.grommet.io', '_self')
                      }
                    >
                      <CardBody margin="small">
                        <BarChart color="TabularGreen" size="large" />
                      </CardBody>
                    </Card>
                  </RotatedIcon>
                  <RotatedIcon
                    rotate="rotate(-3.69deg)"
                    margin="0px 0px 0px 60px"
                  >
                    <Card
                      alignSelf="center"
                      margin={{ left: 'large' }}
                      animation={{ type: 'jiggle', duration: 2300, delay: 600 }}
                      onClick={() =>
                        window.open('https://slides.grommet.io', '_self')
                      }
                    >
                      <CardBody margin="small">
                        <RotatedIcon
                          rotate="rotate(90deg)"
                          margin="0px 2px 0px -3px"
                        >
                          <Selection color="SlidesBlue" size="large" />
                        </RotatedIcon>
                      </CardBody>
                    </Card>
                  </RotatedIcon>
                </Box>
                <Box>
                  <Card
                    alignSelf="center"
                    animation={{ type: 'jiggle', duration: 1200, delay: 550 }}
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
            bottom: 'large',
          }}
          size="xlarge"
        >
          Grommet Tool Suite
        </Heading>
        <HomeGrid />
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
        <Box alignSelf="center" margin={{ top: 'xlarge', bottom: 'xlarge' }}>
          <Heading level={2} size="xlarge" margin={{ bottom: 'medium' }}>
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
            onClick={() => {
              window.open(
                'https://medium.com/@marisakuberra/the-power-of-no-code-tools-24b9b0d5f97f',
                '_self',
              );
            }}
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
                  link="https://designer.grommet.io"
                  icon={
                    <ClearOption size="customSmall" color="DesignerYellow" />
                  }
                />
                <SmallCard
                  link="https://theme-designer.grommet.io"
                  icon={<Configure size="customSmall" color="ThemerOrange" />}
                />
                <SmallCard
                  link="https://images.grommet.io"
                  icon={<Camera size="customSmall" color="ImagerOrange" />}
                />
                <SmallCard
                  link="https://publisher.grommet.io"
                  icon={
                    <CloudUpload size="customSmall" color="PublisherPink" />
                  }
                />
                <SmallCard
                  link="https://slides.grommet.io"
                  icon={
                    <RotatedIcon
                      rotate="rotate(90deg)"
                      margin="-3px 3px -3px -3px"
                    >
                      <Selection size="customSmall" color="SlidesBlue" />
                    </RotatedIcon>
                  }
                />
                <SmallCard
                  link="https://tabular.grommet.io"
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
                  link="https://designer.grommet.io"
                  size="xsmall"
                  icon={<ClearOption size="large" color="DesignerYellow" />}
                />
                <SmallCard
                  text="Themer"
                  link="https://theme-designer.grommet.io"
                  size="xsmall"
                  icon={<Configure size="large" color="ThemerOrange" />}
                />
                <SmallCard
                  text="Images"
                  link="https://images.grommet.io"
                  size="xsmall"
                  icon={<Camera size="large" color="ImagerOrange" />}
                />
                <SmallCard
                  text="Publisher"
                  link="https://publisher.grommet.io"
                  size="xsmall"
                  icon={<CloudUpload size="large" color="PublisherPink" />}
                />
                <SmallCard
                  text="Slides"
                  link="https://slides.grommet.io"
                  size="xsmall"
                  icon={
                    <RotatedIcon
                      rotate="rotate(90deg)"
                      margin="0px 3px 0px -3px"
                    >
                      <Selection size="large" color="SlidesBlue" />
                    </RotatedIcon>
                  }
                />
                <SmallCard
                  text="Tabular"
                  link="https://tabular.grommet.io"
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
