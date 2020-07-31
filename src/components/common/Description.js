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
              top: 'xlarge',
              horizontal: 'xlarge',
              bottom: 'medium',
            }}
          >
            <Heading
              size="large"
              margin={
                responsive === 'large' || responsive === 'xlarge'
                  ? { top: 'xlarge', bottom: 'none', horizontal: 'xlarge' }
                  : { top: 'xlarge', bottom: 'none' }
              }
              alignSelf="start"
            >
              {title}
            </Heading>
            <Box
              width="large"
              margin={
                responsive === 'large' || responsive === 'xlarge'
                  ? { bottom: 'medium', top: 'none', horizontal: 'xlarge' }
                  : { bottom: 'medium', top: 'none' }
              }
              alignSelf="start"
            >
              <Paragraph fill size="xxlarge">
                {content}
              </Paragraph>
            </Box>
            <ScreenShotRow
              margin={
                responsive === 'large' || responsive === 'xlarge'
                  ? { top: 'large', bottom: '-160px', horizontal: 'xlarge' }
                  : { top: 'large', bottom: '-160px' }
              }
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
