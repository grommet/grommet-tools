import React from 'react';

import { Box, Button, Paragraph, Heading, Stack, Text } from 'grommet';
import IconCard from '../IconCard.js';
import RotatedIcon from './RotatedIcon';

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
          <RotatedIcon rotate="rotate(-5.79deg)">
            <IconCard
              size="medium"
              icon={mainIcon}
              margin={{ left: 'xlarge', top: 'large' }}
            />
          </RotatedIcon>
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
        <RotatedIcon rotate="rotate(7.95deg)">{icon1}</RotatedIcon>
        <RotatedIcon rotate="rotate(-9.18deg)" margin="-30px 0px 0px 30px">
          {icon2}
        </RotatedIcon>
      </Box>
      <Box margin={{ left: 'xlarge' }} direction="row">
        <RotatedIcon rotate="rotate(-11.88deg)" margin="0px 0px 0px 80px">
          {icon3}
        </RotatedIcon>
      </Box>
      <Box margin={{ left: 'xlarge' }} direction="row">
        <RotatedIcon rotate="rotate(8.83deg)" margin="-15px 0px 0px 160px">
          {icon4}
        </RotatedIcon>
      </Box>
      <Box margin={{ left: 'xlarge' }}>
        <RotatedIcon margin="-30px 0px 0px 20px">{icon5}</RotatedIcon>
      </Box>
    </Box>
  </Box>
);
export default HeadingLarge;
