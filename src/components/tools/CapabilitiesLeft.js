import React from 'react';

import { Box, Heading, Paragraph, Image, ResponsiveContext } from 'grommet';

import { ScreenShotRow } from '../index.js';

const CapabilitiesLeft = ({
  mainContent,
  subContent,
  mainImage,
  mainLabel,
  images,
  labels,
}) => (
  <ResponsiveContext.Consumer>
    {(responsive) => (
      <Box
        margin={
          responsive === 'large' || responsive === 'xlarge'
            ? { vertical: 'xlarge', horizontal: 'xlarge' }
            : {
                vertical: 'xlarge',
                horizontal: 'none',
              }
        }
      >
        <Box
          direction="row-responsive"
          margin={{ horizontal: 'xlarge' }}
          justify="between"
        >
          <Box>
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
            margin={{ horizontal: 'none', top: 'medium' }}
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
        <Box margin={{ horizontal: 'xlarge' }}>
          <ScreenShotRow
            margin={{ top: 'xlarge' }}
            src={images}
            label={labels}
            gap="medium"
            justify="around"
          />
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
export { CapabilitiesLeft };
