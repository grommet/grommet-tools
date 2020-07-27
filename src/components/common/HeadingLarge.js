import React from 'react';

import { Box, Button, Paragraph, Heading, Stack, Text } from 'grommet';
import IconCard from '../IconCard.js';

const HeadingLarge = ({
  mainIcon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  title,
  content,
  open,
  link,
  color,
}) => (
  <Box>
    <Box height="medium" margin={{ top: 'xlarge' }}>
      <Stack margin={{ top: 'xlarge' }} anchor="left">
        <Box margin={{ top: 'xlarge' }} pad="xsmall" background="gradient" />
        <Box margin={{ top: 'large' }} direction="row">
          <IconCard
            size="medium"
            icon={mainIcon}
            margin={{ left: 'xlarge', top: 'large' }}
          />
          <Box
            direction="column"
            margin={{
              left: 'xlarge',
              top: 'xlarge',
              bottom: 'medium',
            }}
          >
            <Text> Grommet Tools </Text>
            <Heading level={1} size="xlarge" margin={{ top: 'none' }}>
              {title}
            </Heading>
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
      </Stack>
    </Box>
    <Box gap="medium" margin={{ left: 'xlarge', bottom: 'large' }}>
      <Box direction="row" margin={{ left: 'xlarge' }} gap="xlarge">
        {icon1}
        {icon2}
      </Box>
      <Box margin={{ left: 'xlarge' }} direction="row">
        <Box width="xxsmall"></Box>
        {icon3}
      </Box>
      <Box margin={{ left: 'xlarge' }} direction="row">
        <Box width="xsmall"></Box>
        {icon4}
      </Box>
      <Box margin={{ left: 'xlarge' }}>{icon5}</Box>
    </Box>
  </Box>
);
export default HeadingLarge;
