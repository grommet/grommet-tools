import React from 'react';
import { Box, Text } from 'grommet';

function SmallCard(props) {
  return (
    <Box
      height={props.size}
      width={props.size}
      background="rgb(255,255,255)"
      round="medium"
      justify="center"
      align="center"
      alignContent="center"
      elevation="medium"
    >
      <Box
        margin={{ horizontal: 'small', vertical: 'small' }}
        alignSelf="center"
      >
        {props.icon}
        <Text alignSelf="center" size="xsmall" color={props.textColor}>
          {props.text}
        </Text>
      </Box>
    </Box>
  );
}
export default SmallCard;
