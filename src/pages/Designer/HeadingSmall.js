import React from 'react';

import { Box, Button, Paragraph, Heading, Text } from 'grommet';

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
      <Button
        primary
        href="https://designer.grommet.io/"
        color="DesignerYellow"
        label="Open Designer"
        alignSelf="start"
      />
    </Box>
  </Box>
);
export default HeadingSmall;
