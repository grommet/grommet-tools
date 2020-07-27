import React from 'react';

import { Box, Heading, Paragraph, Image } from 'grommet';

import ScreenshotCard from '../../components/ScreenshotCard.js';

const CapabilitiesLeft = ({ content1, content2, images, labels }) => (
  <Box align="center" margin="xlarge">
    <Box direction="row-responsive">
      <Box margin={{ right: 'large' }}>
        <Heading size="large" margin={{ bottom: 'none', top: 'xlarge' }}>
          Capabilities
        </Heading>
        <Box width="medium">
          <Paragraph size="xxlarge" color="darkGrey" fill>
            {content1}
          </Paragraph>
          <Paragraph size="large" fill>
            {content2}
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
            a11yTitle={labels[0]}
            alignSelf="end"
            src={images[0]}
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
      <ScreenshotCard src={images[1]} label={labels[1]} a11yTitle={labels[1]} />
      <ScreenshotCard src={images[2]} label={labels[2]} a11yTitle={labels[2]} />
      <ScreenshotCard src={images[3]} label={labels[3]} a11yTitle={labels[3]} />
    </Box>
  </Box>
);
export default CapabilitiesLeft;
