import React from 'react';
import { Box, Heading, Text, Stack, Paragraph, Image, Main } from 'grommet';
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
import RotatedIcon from '../../components/RotatedIcon.js';
import styled from 'styled-components';
const DesignIconWrapper = styled.div`
  transform: rotate(-5.79deg);
  transform-origin: 25% 40%;
  margin: 0 auto;
`;

const Designer = () => (
  <Box>
    <AppHeader />
    <Main>
      <Box margin={{ top: 'xlarge' }}>
        <Stack>
          <Box>
            <Box alignSelf="center">
              <Text
                margin={{
                  left: 'large',
                }}
              >
                Grommet Tools
              </Text>
              <Heading
                size="xlarge"
                margin={{
                  top: 'none',
                  bottom: 'medium',
                  left: 'large',
                }}
              >
                Designer
              </Heading>
            </Box>
            <Box height="gradient1" background="gradient"></Box>
            <Box alignSelf="center" margin={{ left: 'xlarge' }} width="large">
              <Box margin={{ left: 'xlarge' }}>
                <Paragraph size="xxlarge" color="darkGrey">
                  Grommet Designer is a tool used build expiriences with Grommet
                  components; then publish and share your ideas with a simple
                  wysiwg interface
                </Paragraph>
                <Box
                  round="medium"
                  background="buttonYellow"
                  onClick={() => {}}
                  width="small"
                  height="xxsmall"
                  justify="center"
                >
                  <Text weight="bold" alignSelf="center" color="black">
                    Open Designer
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <DesignIconWrapper>
            <IconCard
              size="medium"
              icon={<ClearOption size="xxlarge" color="DesignerYellow" />}
              margin={{ left: 'xlarge', bottom: 'xlarge' }}
            />
          </DesignIconWrapper>
        </Stack>
      </Box>
      <Box
        direction="column"
        gap="medium"
        margin={{ left: 'xlarge', bottom: 'xlarge' }}
      >
        <Box direction="row" margin={{ left: 'xlarge' }} gap="xlarge">
          <Camera size="large" color="ImagerOrange" />
          <Configure size="large" color="ThemerOrange" />
        </Box>
        <Box margin={{ left: 'xlarge' }} direction="row">
          <Box width="xxsmall"></Box>
          <CloudUpload size="large" color="PublisherPink" />
        </Box>
        <Box margin={{ left: 'xlarge' }} width="small" direction="row">
          <Box width="xsmall"></Box>
          <RotatedIcon>
            <Selection size="large" color="SlidesBlue" />
          </RotatedIcon>
        </Box>
        <Box margin={{ left: 'xlarge' }}>
          <BarChart size="large" color="TabularGreen" />
        </Box>
      </Box>

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
            horizontal: 'xlarge',
            bottom: 'xlarge',
          }}
        >
          <Heading size="large" margin={{ top: 'xlarge' }}>
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
            direction="row-responsive"
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
        <Box direction="row">
          <Box margin={{ right: 'large' }}>
            <Heading size="large" margin={{ bottom: 'none', top: 'xlarge' }}>
              Capabilities
            </Heading>
            <Box width="576px">
              <Paragraph size="large" color="darkGrey">
                The Designer puts the power in your hands to create sites with
                built in theming, while leveraging the full extent of grommet’s
                components and props.
              </Paragraph>
              <Paragraph size="large">
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
            <Image alignSelf="end" src="gremlin_laptop.svg" />
          </Box>
        </Box>
        <Box
          direction="row"
          justify="center"
          margin={{ top: 'medium' }}
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
