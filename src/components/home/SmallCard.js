import React from 'react';
import { Box, Text } from 'grommet';

function SmallCard({ size, link, icon, text }) {
  return (
    <Box
      height={size}
      width={size}
      background="rgb(255,255,255)"
      round="medium"
      justify="center"
      align="center"
      alignContent="center"
      elevation="medium"
      onClick={() => {
        window.open(link, '_self');
      }}
    >
      <Box
        margin={{ horizontal: 'small', vertical: 'small' }}
        alignSelf="center"
      >
        {icon}
        <Text alignSelf="center" size="xsmall" color="darkGrey">
          {text}
        </Text>
      </Box>
    </Box>
  );
}
export { SmallCard };
