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
  ResponsiveContext,
} from 'grommet';

const GridCard = ({
  buttonColor,
  heading,
  buttonName,
  icon,
  text,
  learnLink,
  openLink,
  a11yTitle,
}) => (
  <Card round="medium" background="rgb(255,255,255)">
    <ResponsiveContext.Consumer>
      {(responsive) => (
        <Box>
          <Box
            margin={
              responsive === 'small' || responsive === 'xsmall'
                ? { left: 'large', top: 'large' }
                : { left: 'medium', top: 'large' }
            }
            align="start"
          >
            {icon}
          </Box>
          <CardHeader>
            <Heading
              margin={
                responsive === 'small' || responsive === 'xsmall'
                  ? { left: 'large', vertical: 'xsmall' }
                  : { left: 'medium', vertical: 'xsmall' }
              }
            >
              {heading}
            </Heading>
          </CardHeader>
        </Box>
      )}
    </ResponsiveContext.Consumer>
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
      target="_blank"
      rel="noreferrer"
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
        a11yTitle={a11yTitle}
        margin="small"
        label="Learn More"
      />
    </CardFooter>
  </Card>
);
export { GridCard };
