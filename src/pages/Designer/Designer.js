import React from 'react';
import {
  Grommet,
  Box,
  Heading,
  Text,
  Stack,
  Card,
  CardBody,
  Paragraph,
  Image,
} from 'grommet';
import { ClearOption } from 'grommet-icons';
import { grommetToolsTheme } from '../../theme.js';
import AppHeader from '../../components/AppHeader.js';

function Designer() {
  return (
    <Grommet theme={grommetToolsTheme}>
      <AppHeader />
      <Box margin={{ top: 'xlarge' }}>
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
            size="large"
            color="darkGrey"
          >
            Grommet Designer is a tool used build expiriences with Grommet
            components; then publish and share your ideas with a simple wysiwg
            interface
          </Paragraph>
        </Box>
      </Box>

      <Stack>
        <Box
          background="YellowBackground"
          height="designerBox"
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
          <Box width="large" margin={{ bottom: 'large' }}>
            <Paragraph fill={true} size="xlarge">
              A free, web-based WSIWG component editor, Grommet Designer is a
              themeable experience designer baked on top of react and java
              framework. See some examples from Grommet designers below.
            </Paragraph>
          </Box>
          <Box direction="row" justify="center" gap="large">
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
      <Box margin={{ top: 'xlarge', horizontal: 'xlarge' }}>
        <Box direction="row">
          <Box>
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
          <Box alignSelf="end" align="end">
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
      <Box background="YellowBackground" height="medium">
        <Box
          margin={{ top: 'xlarge', bottom: 'medium' }}
          alignSelf="center"
          width="DesignerStart"
        >
          <Heading size="small" margin="xsmall">
            Start Using the Designer Now
          </Heading>
          <Paragraph size="large" margin="xsmall">
            Open the Designer tool and get started by watching a tutorial or
            just jumping right in to your first design.
          </Paragraph>
        </Box>
        <Box
          alignSelf="center"
          background="white"
          width="buttonBox"
          round="medium"
          height="xxsmall"
          justify="center"
          elevation="small"
          margin="none"
          onClick={() => {}}
        >
          <Text weight="bold" alignSelf="center" TextAlign="center">
            Open Designer
          </Text>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Designer;
