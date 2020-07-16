import React from 'react';
import { Box, Text } from 'grommet';

function SmallCard(props) {
  return (
    <Box
      height="xsmall"
      width="xsmall"
      background="rgb(255,255,255)"
      round="medium"
      justify="center"
      align="center"
      alignContent="center"
      elevation="medium"
    >
      <Box alignSelf="center">{props.icon}</Box>
      <Text alignSelf="center" size="small" color={props.textColor}>
        {props.text}
      </Text>
    </Box>
  );
}
export default SmallCard;
