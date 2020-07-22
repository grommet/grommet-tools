import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Paragraph,
  Image,
  Main,
  ResponsiveContext,
} from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
} from 'grommet-icons';
import AppHeader from '../../components/AppHeader.js';
import IconCard from '../../components/IconCard.js';
import ScreenshotCard from '../../components/ScreenshotCard.js';

const Designer = () => (
  <Box>
    <AppHeader />
    <Main>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === 'large' || responsive === 'xlarge' ? (
            <Box>
              <Box height="medium" margin={{ top: 'xlarge' }}>
                <Stack margin={{ top: 'xlarge' }} anchor="left">
                  <Box
                    margin={{ top: 'xlarge' }}
                    height="gradient1"
                    background="gradient"
                  />
                  <Box margin={{ top: 'large' }} direction="row">
                    <IconCard
                      size="medium"
                      icon={
                        <ClearOption size="xxlarge" color="DesignerYellow" />
                      }
                      margin={{ left: 'xlarge', top: 'large' }}
                    />
                    <Box
                      direction="column"
                      margin={{
                        left: 'xlarge',
                        top: 'xlarge',
                        bottom: 'medium',
                      }}
                    >
                      <Text> Grommet Tools </Text>
                      <Heading level={1} size="xlarge" margin={{ top: 'none' }}>
                        Designer
                      </Heading>
                      <Paragraph
                        margin={{ top: 'none' }}
                        size="xxlarge"
                        color="darkGrey"
                      >
                        Grommet Designer is a tool used to build expiriences
                        with Grommet components; then publish and share your
                        ideas with a simple wysiwg interface
                      </Paragraph>
                      <Box
                        round="medium"
                        background="buttonYellow"
                        onClick={() => {}}
                        width="small"
                        height="xxsmall"
                        justify="center"
                        margin={{ bottom: 'small' }}
                      >
                        <Text weight="bold" alignSelf="center" color="black">
                          Open Designer
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <Box
                direction="column"
                gap="medium"
                margin={{ left: 'xlarge', bottom: 'large' }}
              >
                <Box direction="row" margin={{ left: 'xlarge' }} gap="xlarge">
                  <Camera opacity="0.8" size="large" color="ImagerOrange" />
                  <Configure opacity="0.9" size="large" color="ThemerOrange" />
                </Box>
                <Box margin={{ left: 'xlarge' }} direction="row">
                  <Box width="xxsmall"></Box>
                  <CloudUpload
                    opacity="0.7"
                    size="large"
                    color="PublisherPink"
                  />
                </Box>
                <Box margin={{ left: 'xlarge' }} direction="row">
                  <Box width="xsmall"></Box>
                  <Selection opacity="0.5" size="large" color="SlidesBlue" />
                </Box>
                <Box margin={{ left: 'xlarge' }}>
                  <BarChart opacity="0.3" size="large" color="TabularGreen" />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box margin={{ top: 'xlarge' }}>
              <Box margin={{ left: 'xlarge' }}>
                <Text> Grommet Tools </Text>
                <Heading
                  level={1}
                  size="xlarge"
                  margin={{ top: 'none', bottom: 'medium' }}
                >
                  Designer
                </Heading>
              </Box>
              <Box height="gradient1" background="gradient" />
              <Box margin={{ left: 'xlarge' }}>
                <Paragraph
                  margin={{ top: 'none' }}
                  size="xxlarge"
                  color="darkGrey"
                >
                  Grommet Designer is a tool used to build expiriences with
                  Grommet components; then publish and share your ideas with a
                  simple wysiwg interface
                </Paragraph>
                <Box
                  round="medium"
                  background="buttonYellow"
                  onClick={() => {}}
                  width="small"
                  height="xxsmall"
                  justify="center"
                  margin={{ bottom: 'small' }}
                >
                  <Text weight="bold" alignSelf="center" color="black">
                    Open Designer
                  </Text>
                </Box>
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>

      <Stack>
        <Box
          background="YellowBackground"
          height="large"
          margin={{
            top: 'xlarge',
          }}
        ></Box>
        <Box
          margin={{
            top: 'xlarge',
            horizontal: 'xlarge',
            bottom: 'xlarge',
          }}
        >
          <Heading size="large" margin={{ top: 'xlarge', bottom: 'none' }}>
            What is the Designer?
          </Heading>
          <Box width="large" margin={{ bottom: 'xlarge', top: 'none' }}>
            <Paragraph fill={true} size="xxlarge">
              A free, web-based WSIWG component editor, Grommet Designer is a
              themeable experience designer baked on top of react and java
              framework. See some examples from Grommet designers below.
            </Paragraph>
          </Box>
          <Box
            direction="row"
            justify="center"
            gap="large"
            margin={{ vertical: 'xlarge' }}
          >
            <ScreenshotCard src="Designer_1.svg" label="Deisgner File Name" />
            <ScreenshotCard src="Designer_2.svg" label="Deisgner File Name" />
            <ScreenshotCard src="Designer_3.svg" label="Deisgner File Name" />
          </Box>
        </Box>
      </Stack>
      <Box height="small"></Box>
      <Box margin={{ top: 'xlarge', horizontal: 'xlarge' }}>
        <Box direction="row-responsive">
          <Box margin={{ right: 'large' }}>
            <Heading size="large" margin={{ bottom: 'none', top: 'xlarge' }}>
              Capabilities
            </Heading>
            <Box width="medium">
              <Paragraph size="large" color="darkGrey" fill>
                The Designer puts the power in your hands to create sites with
                built in theming, while leveraging the full extent of grommet’s
                components and props.
              </Paragraph>
              <Paragraph size="large" fill>
                Open the Designer tool and get started by watching a tutorial or
                just jumping right in to your first design. Open the Designer
                tool and get started by watching a tutorial or just jumping
                right in to your first design.
              </Paragraph>
            </Box>
          </Box>
          <Box
            alignSelf="end"
            align="end"
            margin={{ left: 'xlarge', top: 'medium' }}
          >
            <Box>
              <Image
                a11yTitle="Gremlin Holding a Laptop"
                alignSelf="end"
                src="gremlin_laptop.svg"
                fill="horizontal"
                fit="contain"
              />
            </Box>
          </Box>
        </Box>
        <Box
          direction="row-responsive"
          justify="center"
          margin={{ top: 'xlarge' }}
          gap="large"
        >
          <ScreenshotCard
            src="Designer_4.svg"
            label="Creating in Light and Dark modes"
          />
          <ScreenshotCard
            src="Designer_5.svg"
            label="Importing your own theme"
          />
          <ScreenshotCard src="Designer_6.svg" label="Easy publishing" />
        </Box>
      </Box>
      <Box height="xsmall"></Box>
      <Box background="YellowBackground" height="medium">
        <Box
          margin={{ top: 'xlarge', bottom: 'medium' }}
          alignSelf="center"
          width="DesignerStart"
        >
          <Heading size="small" margin="xsmall" alignSelf="center">
            Start Using the Designer Now
          </Heading>
          <Paragraph size="large" margin="small" alignSelf="center">
            Open the Designer tool and get started by watching a tutorial or
            just jumping right in to your first design.
          </Paragraph>
        </Box>
        <Box
          alignSelf="center"
          background="white"
          width="small"
          round="medium"
          height="xxsmall"
          justify="center"
          elevation="small"
          margin="none"
          onClick={() => {}}
        >
          <Text
            weight="bold"
            alignSelf="center"
            TextAlign="center"
            color="black"
          >
            Open Designer
          </Text>
        </Box>
      </Box>
    </Main>
  </Box>
);

export default Designer;
