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
          margin={{
            horizontal: responsive === 'small' ? 'medium' : 'xlarge',
            top: 'xlarge',
            bottom: 'small',
          }}
          justify="between"
          gap="medium"
        >
          <Box margin={{ top: 'xlarge' }}>
            <Image
              a11yTitle={mainLabel}
              alignSelf="center"
              src={mainImage}
              fill="horizontal"
              fit="contain"
            />
          </Box>
          <Box>
            <Heading
              size={responsive === 'large' ? 'large' : 'medium'}
              margin={{ bottom: 'none', top: 'xlarge' }}
            >
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
          ></Box>
        </Box>
        <Box
          margin={{ horizontal: responsive === 'small' ? 'medium' : 'xlarge' }}
        >
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
export { CapabilitiesRight };
