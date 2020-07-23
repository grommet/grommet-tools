import React from 'react';

import { Box, Paragraph, Heading, Stack, Text } from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
} from 'grommet-icons';
import IconCard from '../../components/IconCard.js';

const HeadingLarge = () => (
  <Box>
    <Box height="medium" margin={{ top: 'xlarge' }}>
      <Stack margin={{ top: 'xlarge' }} anchor="left">
        <Box margin={{ top: 'xlarge' }} pad="xsmall" background="gradient" />
        <Box margin={{ top: 'large' }} direction="row">
          <IconCard
            size="medium"
            icon={<ClearOption size="xxlarge" color="DesignerYellow" />}
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
            <Paragraph margin={{ top: 'none' }} size="xxlarge" color="darkGrey">
              Grommet Designer is a tool used to build experiences with Grommet
              components; then publish and share your ideas with a simple wysiwg
              interface
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
    <Box gap="medium" margin={{ left: 'xlarge', bottom: 'large' }}>
      <Box direction="row" margin={{ left: 'xlarge' }} gap="xlarge">
        <Camera opacity="0.8" size="large" color="ImagerOrange" />
        <Configure opacity="0.9" size="large" color="ThemerOrange" />
      </Box>
      <Box margin={{ left: 'xlarge' }} direction="row">
        <Box width="xxsmall"></Box>
        <CloudUpload opacity="0.7" size="large" color="PublisherPink" />
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
);
export default HeadingLarge;
