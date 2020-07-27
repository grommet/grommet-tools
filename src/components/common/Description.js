import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import ScreenshotCard from '../../components/ScreenshotCard.js';

const Description = ({ tool, content, color, images, labels }) => (
  <Box
    background={color}
    margin={{
      top: 'xlarge',
      bottom: 'xlarge',
    }}
  >
    <Box
      margin={{
        top: 'xlarge',
        horizontal: 'xlarge',
        bottom: 'medium',
      }}
    >
      <Heading size="large" margin={{ top: 'xlarge', bottom: 'none' }}>
        What is the {tool}?
      </Heading>
      <Box width="large" margin={{ bottom: 'medium', top: 'none' }}>
        <Paragraph fill={true} size="xxlarge">
          {content}
        </Paragraph>
      </Box>
      <Box
        direction="row-responsive"
        justify="center"
        gap="medium"
        margin={{ top: 'large', bottom: '-160px' }}
      >
        <ScreenshotCard
          src={images[0]}
          label={labels[0]}
          a11yTitle={labels[0]}
        />
        <ScreenshotCard
          src={images[1]}
          label={labels[1]}
          a11yTitle={labels[1]}
        />
        <ScreenshotCard
          src={images[2]}
          label={labels[2]}
          a11yTitle={labels[2]}
        />
      </Box>
    </Box>
  </Box>
);

export default Description;
