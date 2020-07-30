import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { ScreenShotRow } from '../index.js';

const Description = ({ title, content, color, images, labels }) => (
  <Box background={color} margin={{ veritcal: 'xlarge' }}>
    <Box
      margin={{
        top: 'xlarge',
        horizontal: 'xlarge',
        bottom: 'medium',
      }}
    >
      <Heading size="large" margin={{ top: 'xlarge', bottom: 'none' }}>
        {title}
      </Heading>
      <Box width="large" margin={{ bottom: 'medium', top: 'none' }}>
        <Paragraph fill size="xxlarge">
          {content}
        </Paragraph>
      </Box>
      <ScreenShotRow
        margin={{ top: 'large', bottom: '-160px' }}
        gap="medium"
        src={images}
        label={labels}
      />
    </Box>
  </Box>
);

export { Description };
