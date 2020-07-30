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
      align=""
    >
      <Heading
        size="large"
        margin={{ top: 'xlarge', bottom: 'none', horizontal: 'xlarge' }}
        alignSelf="start"
      >
        {title}
      </Heading>
      <Box
        width="large"
        margin={{ bottom: 'medium', top: 'none', horizontal: 'xlarge' }}
        alignSelf="start"
      >
        <Paragraph fill size="xxlarge">
          {content}
        </Paragraph>
      </Box>
      <ScreenShotRow
        margin={{ top: 'large', bottom: '-160px', horizontal: 'xlarge' }}
        gap="medium"
        src={images}
        label={labels}
        justify="around"
      />
    </Box>
  </Box>
);

export default Description;
