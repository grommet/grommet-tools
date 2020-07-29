import React from 'react';

import {
  Anchor,
  Box,
  Button,
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
  buttonName,
  icon,
  text,
  learnLink,
  openLink,
}) => (
  <Card background="rgb(255,255,255)">
    <Box margin={{ horizontal: 'medium', top: 'large' }} align="start">
      {icon}
    </Box>
    <CardHeader>
      <Heading margin={{ horizontal: 'medium', vertical: 'xsmall' }}>
        {heading}
      </Heading>
    </CardHeader>
    <CardBody>
      <Paragraph
        fill
        alignSelf="start"
        margin={{ horizontal: 'medium', vertical: 'xsmall' }}
      >
        {text}
      </Paragraph>
    </CardBody>
    <Button
      primary
      href={openLink}
      color={buttonColor}
      label={buttonName}
      margin={{ horizontal: 'medium', vertical: 'small' }}
      alignSelf="start"
    ></Button>
    <CardFooter
      background="light-2"
      margin={{ top: 'large' }}
      alignContent="end"
      justify="end"
    >
      <Anchor
        alignSelf="center"
        href={learnLink}
        margin="small"
        label="Learn More"
      />
    </CardFooter>
  </Card>
);
export { GridCard };
