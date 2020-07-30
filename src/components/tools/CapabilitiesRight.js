import React from 'react';

import { Box, Heading, Paragraph, Image } from 'grommet';

import { ScreenShotRow } from '../index.js';

const CapabilitiesRight = ({
  mainContent,
  subContent,
  mainImage,
  mainLabel,
  images,
  labels,
}) => (
  <Box align="center" margin="xlarge">
    <Box direction="row-responsive">
      <Box margin={{ right: 'large', top: 'xlarge' }}>
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
      <Box
        alignSelf="end"
        align="end"
        margin={{ left: 'xlarge', top: 'medium' }}
      >
        <Heading
          size="large"
          margin={{ bottom: 'none', top: 'xlarge' }}
          alignSelf="start"
        >
          Capabilities
        </Heading>
        <Box width="medium" margin={{ right: 'large' }}>
          <Paragraph size="xxlarge" color="darkGrey" fill>
            {mainContent}
          </Paragraph>
          <Paragraph size="large" fill>
            {subContent}
          </Paragraph>
        </Box>
      </Box>
    </Box>
    <ScreenShotRow margin={{ top: 'xlarge' }} src={images} label={labels} />
  </Box>
);
export { CapabilitiesRight };
