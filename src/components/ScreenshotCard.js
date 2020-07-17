import React from 'react';
import { Box, Image, Text } from 'grommet';

const ScreenshotCard = (props) => (
  <Box direction="column">
    <Image src={props.src} />
    <Text alignSelf="center" color="altGrey" margin="medium">
      {props.text}
    </Text>
  </Box>
);
export default ScreenshotCard;
