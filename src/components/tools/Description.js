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
              horizontal: 'xlarge',
            }}
          >
            <Heading
              margin={{ top: 'large', bottom: 'none' }}
              size="large"
              // margin={
              //   responsive === 'large' || responsive === 'xlarge'
              //     ? { top: 'xlarge', bottom: 'none', horizontal: 'xlarge' }
              //     : { top: 'xlarge', bottom: 'none' }
              // }
              alignSelf="start"
            >
              {title}
            </Heading>
            <Box
              width="large"
              // margin={
              //   responsive === 'large' || responsive === 'xlarge'
              //     ? { bottom: 'medium', top: 'none', horizontal: 'xlarge' }
              //     : { bottom: 'medium', top: 'none' }
              // }
              alignSelf="start"
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
      )}
    </ResponsiveContext.Consumer>
  </Box>
);

export { Description };
