import React from 'react';
import { Box, Text } from 'grommet';

function SmallCard({ size, link, icon, text, responsiveSize }) {
  console.log(responsiveSize);
  return (
    <Box
      height={size}
      width={size}
      pad={responsiveSize === 'small' ? 'xsmall' : 'medium'}
      background="rgb(255,255,255)"
      round="medium"
      margin="small"
      justify="center"
      align="center"
      elevation="xsmall"
      onClick={() => {
        window.open(link, '_self');
      }}
    >
      {icon}
      {text && (
        <Text alignSelf="center" size="xsmall" color="darkGrey">
          {text}
        </Text>
      )}
    </Box>
  );
}
export { SmallCard };
