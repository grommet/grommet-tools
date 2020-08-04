import React from 'react';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import { ScreenShotRow } from '../index.js';

const Description = ({ title, content, color, images, labels }) => (
  <Box background={color} margin={{ veritcal: 'xlarge' }}>
    <ResponsiveContext.Consumer>
      {(responsive) => (
        <Box
          margin={
            responsive === 'large' || responsive === 'xlarge'
              ? { horizontal: 'xlarge' }
              : 'none'
          }
        >
          <Box
            margin={{
              vertical: 'xsmall',
              horizontal: responsive === 'small' ? 'medium' : 'xlarge',
            }}
          >
            <Heading
              margin={{ top: 'large', bottom: 'none' }}
              size="large"
              alignSelf="start"
            >
              {title}
            </Heading>
            <Box width="large" alignSelf="start">
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
      )}
    </ResponsiveContext.Consumer>
  </Box>
);

export { Description };
