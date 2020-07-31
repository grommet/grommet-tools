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
      // alignContent="center"
      elevation="xsmall"
      onClick={() => {
        window.open(link, '_self');
      }}
      // flex={false}
    >
      {/* <Box
        // margin={{ horizontal: 'small', vertical: 'small' }}
        // alignSelf="center"
        a11yTitle={text}
      > */}
      {icon}
      {text && (
        <Text alignSelf="center" size="xsmall" color="darkGrey">
          {text}
        </Text>
      )}
      {/* </Box> */}
    </Box>
  );
}
export { SmallCard };
