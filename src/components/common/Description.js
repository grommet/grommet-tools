import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import ScreenShotRow from './ScreenShotRow';

const Description = ({ title, content, color, images, labels }) => (
  <Box background={color} margin={{ veritcal: 'xlarge' }}>
    <Box
      margin={{
        top: 'xlarge',
        horizontal: 'xlarge',
        bottom: 'medium',
      }}
    >
      <Heading
        size="large"
        margin={{ top: 'xlarge', bottom: 'none', horizontal: 'large' }}
        justify="around"
      >
        {title}
      </Heading>
      <Box
        width="large"
        margin={{ bottom: 'medium', top: 'none', horizontal: 'large' }}
        justify="around"
      >
        <Paragraph fill size="xxlarge">
          {content}
        </Paragraph>
      </Box>
      <ScreenShotRow
        margin={{ top: 'large', bottom: '-160px' }}
        gap="medium"
        src={images}
        label={labels}
        justify="around"
      />
    </Box>
  </Box>
);

export default Description;
