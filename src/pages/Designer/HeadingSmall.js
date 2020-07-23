import React from 'react';

import { Box, Paragraph, Heading, Text } from 'grommet';

const HeadingSmall = () => (
  <Box margin={{ top: 'xlarge' }}>
    <Box margin={{ left: 'xlarge' }}>
      <Text> Grommet Tools </Text>
      <Heading
        level={1}
        size="xlarge"
        margin={{ top: 'none', bottom: 'medium' }}
      >
        Designer
      </Heading>
    </Box>
    <Box pad="xsmall" background="gradient" />
    <Box margin={{ left: 'xlarge' }}>
      <Paragraph margin={{ top: 'none' }} size="xxlarge" color="darkGrey">
        Grommet Designer is a tool used to build expiriences with Grommet
        components; then publish and share your ideas with a simple wysiwg
        interface
      </Paragraph>
      <Box
        round="medium"
        background="buttonYellow"
        onClick={() => {}}
        width="small"
        height="xxsmall"
        justify="center"
        margin={{ bottom: 'small' }}
      >
        <Text weight="bold" alignSelf="center" color="black">
          Open Designer
        </Text>
      </Box>
    </Box>
  </Box>
);
export default HeadingSmall;
