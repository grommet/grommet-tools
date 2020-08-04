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
          margin={{ horizontal: 'xlarge', top: 'xlarge' }}
          justify="between"
        >
          <Box margin={{ top: 'large' }}>
            <Heading size="large" margin={{ bottom: 'none', top: 'xlarge' }}>
              Capabilities
            </Heading>
            <Box width="medium">
              <Paragraph
                size="xxlarge"
                color="darkGrey"
                fill
                margin={{ bottom: 'small' }}
              >
                {mainContent}
              </Paragraph>
              <Paragraph size="large" fill margin={{ top: 'small' }}>
                {subContent}
              </Paragraph>
            </Box>
          </Box>
          <Box
            alignSelf="center"
            margin={{ horizontal: 'none', top: 'medium' }}
          >
            <Box margin={{ top: 'large', bottom: 'large' }}>
              <Image
                a11yTitle={mainLabel}
                alignSelf="center"
                src={mainImage}
                fill="horizontal"
                fit="contain"
              />
            </Box>
          </Box>
        </Box>
        <Box margin={{ horizontal: 'xlarge' }}>
          <ScreenShotRow
            margin={{ top: 'large' }}
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
