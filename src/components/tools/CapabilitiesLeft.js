import React from 'react';

import { Box, Heading, Paragraph, Image } from 'grommet';

import { ScreenShotRow } from '../index.js';

const CapabilitiesLeft = ({
  mainContent,
  subContent,
  mainImage,
  mainLabel,
  images,
  labels,
}) => (
  <Box align="center" margin="xlarge">
    <Box direction="row-responsive">
      <Box margin={{ right: 'large' }}>
        <Heading size="large" margin={{ bottom: 'none', top: 'xlarge' }}>
          Capabilities
        </Heading>
        <Box width="medium">
          <Paragraph size="xxlarge" color="darkGrey" fill>
            {mainContent}
          </Paragraph>
          <Paragraph size="large" fill>
            {subContent}
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
            a11yTitle={mainLabel}
            alignSelf="end"
            src={mainImage}
            fill="horizontal"
            fit="contain"
          />
        </Box>
      </Box>
    </Box>
    <ScreenShotRow margin={{ top: 'xlarge' }} src={images} label={labels} />
  </Box>
);
export { CapabilitiesLeft };
