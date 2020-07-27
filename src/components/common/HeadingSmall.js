import React from 'react';

import { Box, Button, Paragraph, Heading, Text } from 'grommet';

const HeadingSmall = ({ title, content, open, link, color }) => (
  <Box margin={{ vertical: 'xlarge' }}>
    <Box margin={{ left: 'xlarge' }}>
      <Text> Grommet Tools </Text>
      <Heading
        level={1}
        size="xlarge"
        margin={{ top: 'none', bottom: 'medium' }}
      >
        {title}
      </Heading>
    </Box>
    <Box pad="xsmall" background="gradient" />
    <Box margin={{ left: 'xlarge' }}>
      <Paragraph margin={{ top: 'none' }} size="xxlarge" color="darkGrey">
        {content}
      </Paragraph>
      <Button
        primary
        href={link}
        color={color}
        label={open}
        alignSelf="start"
      />
    </Box>
  </Box>
);
export default HeadingSmall;
