import React from 'react';

import { Box, Heading, Paragraph, Image, ResponsiveContext } from 'grommet';

import { ScreenShotRow } from '../';

const CapabilitiesRight = ({
  mainContent,
  subContent,
  mainImage,
  mainLabel,
  images,
  labels,
}) => (
  <Box align="center" margin="xlarge">
    <Box direction="row-responsive">
      <Box margin={{ right: 'large', top: 'xlarge' }}>
        <Image
          a11yTitle={mainLabel}
          alignSelf="end"
          src={mainImage}
          fill="horizontal"
          fit="contain"
        />
      </Box>
      <Box
        alignSelf="end"
        align="end"
        margin={{ left: 'xlarge', top: 'medium' }}
      >
        <ResponsiveContext.Consumer>
          {(responsive) => (
            <Heading
              size={
                responsive === 'large' || responsive === 'xlarge'
                  ? 'large'
                  : 'medium'
              }
              margin={{ bottom: 'none', top: 'xlarge' }}
              alignSelf="start"
            >
              Capabilities
            </Heading>
          )}
        </ResponsiveContext.Consumer>
        <Box width="medium" margin={{ right: 'large' }}>
          <Paragraph size="xxlarge" color="darkGrey" fill>
            {mainContent}
          </Paragraph>
          <Paragraph size="large" fill>
            {subContent}
          </Paragraph>
        </Box>
      </Box>
    </Box>
    <ScreenShotRow margin={{ top: 'xlarge' }} src={images} label={labels} />
  </Box>
);
export { CapabilitiesRight };
