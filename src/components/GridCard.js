import React from 'react';

import {
  Anchor,
  Box,
  Paragraph,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from 'grommet';

const GridCard = ({
  buttonColor,
  heading,
  icon,
  text,
  learnLink,
  openLink,
}) => (
  <Card background="rgb(255,255,255)">
    <Box margin={{ horizontal: 'medium', top: 'large' }} alignSelf="start">
      {icon}
    </Box>
    <CardHeader>
      <Heading margin={{ horizontal: 'medium', vertical: 'xsmall' }}>
        {heading}
      </Heading>
    </CardHeader>
    <CardBody>
      <Paragraph
        alignSelf="start"
        margin={{ horizontal: 'medium', vertical: 'xsmall' }}
      >
        {text}
      </Paragraph>
    </CardBody>
    <Box
      round="medium"
      background={buttonColor}
      margin={{ horizontal: 'medium', vertical: 'small' }}
      alignSelf="start"
      width="auto"
    >
      <Anchor margin="small" href={openLink}>
        Open {heading}
      </Anchor>
    </Box>
    <CardFooter
      background={buttonColor}
      margin={{ top: 'xlarge' }}
      alignContent="end"
      justify="end"
    >
      <Anchor
        alignSelf="center"
        href={learnLink}
        margin="xsmall"
        label="Learn More"
      />
    </CardFooter>
  </Card>
);
export default GridCard;
