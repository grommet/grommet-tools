import React from 'react';
import { Grommet, Box, Heading, Text, Stack, Paragraph, Image } from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
} from 'grommet-icons';
import { grommetToolsTheme } from '../../theme.js';
import AppHeader from '../../components/AppHeader.js';
import IconCard from '../../components/IconCard.js';

function Designer() {
  return (
    <Grommet theme={grommetToolsTheme}>
      <AppHeader />
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
              <Paragraph
                margin={{
                  left: 'xlarge',
                }}
                size="xxlarge"
                color="darkGrey"
              >
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
                margin={{ left: 'xlarge' }}
              >
                <Text weight="bold" alignSelf="center" color="black">
                  Open Designer
                </Text>
              </Box>
            </Box>
          </Box>
          <IconCard
            size="medium"
            icon={<ClearOption size="xxlarge" color="DesignerYellow" />}
            margin={{ left: 'xlarge' }}
          />
        </Stack>
      </Box>
      <Box direction="column" gap="medium" margin={{ left: 'xlarge' }}>
        <Box direction="row" margin={{ left: 'xlarge' }} gap="xlarge">
          <Camera size="large" color="ImagerOrange" />
          <Configure size="large" color="ThemerOrange" />
        </Box>
        <Box margin={{ left: 'xlarge' }} direction="row">
          <Box width="xxsmall"></Box>
          <CloudUpload size="large" color="PublisherPink" />
        </Box>
        <Box margin={{ left: 'xlarge' }} direction="row">
          <Box width="xsmall"></Box>
          <Selection size="large" color="SlidesBlue" />
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
          <Heading size="large">What is the Designer?</Heading>
          <Box width="large" margin={{ bottom: 'xlarge' }}>
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
            <Box direction="column">
              <Image src="Designer_1.svg" />
              <Text alignSelf="center" color="altGrey">
                Designer File Name
              </Text>
            </Box>
            <Box direction="column">
              <Image src="Designer_2.svg" />
              <Text alignSelf="center" color="altGrey">
                Designer File Name
              </Text>
            </Box>
            <Box direction="column">
              <Image src="Designer_3.svg" />
              <Text alignSelf="center" color="altGrey">
                Designer File Name
              </Text>
            </Box>
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
          <Box direction="column">
            <Image src="Designer_4.svg" />
            <Text alignSelf="center" color="altGrey">
              Creating in Light and Dark modes
            </Text>
          </Box>
          <Box direction="column">
            <Image src="Designer_5.svg" />
            <Text alignSelf="center" color="altGrey" margin="medium">
              Importing your own theme
            </Text>
          </Box>
          <Box direction="column">
            <Image src="Designer_6.svg" />
            <Text alignSelf="center" color="altGrey">
              Easy publishing
            </Text>
          </Box>
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
    </Grommet>
  );
}

export default Designer;
