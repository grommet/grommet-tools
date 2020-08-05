import React from 'react';

import {
  Box,
  Button,
  Paragraph,
  Heading,
  Text,
  ResponsiveContext,
} from 'grommet';

const HeadingSmall = ({ title, content, open, link, color }) => (
  <ResponsiveContext.Consumer>
    {(responsive) => (
      <Box margin={{ vertical: 'xlarge' }}>
        <Box
          margin={{ horizontal: responsive === 'small' ? 'medium' : 'xlarge' }}
          pad={{ vertical: 'medium' }}
        >
          <Text> Grommet Tools </Text>
          <Heading level={1} size="xlarge" margin="none">
            {title}
          </Heading>
        </Box>
        <Box pad="xsmall" background="gradient" />
        <Box
          margin={{ horizontal: responsive === 'small' ? 'medium' : 'xlarge' }}
          pad={{ vertical: 'medium' }}
        >
          <Paragraph margin={{ top: 'none' }} size="xxlarge" color="darkGrey">
            {content}
          </Paragraph>
          <Button
            primary
            href={link}
            color={color}
            label={open}
            alignSelf="start"
            target="_blank"
            rel="noreferrer"
          />
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
export { HeadingSmall };
