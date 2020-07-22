import React from 'react';
import { Box, Image, Text } from 'grommet';

const ScreenshotCard = ({ label, src }) => (
  <Box>
    <Image src={src} />
    <Text alignSelf="center" color="altGrey" margin={{ top: 'none' }}>
      {label}
    </Text>
  </Box>
);
export default ScreenshotCard;
