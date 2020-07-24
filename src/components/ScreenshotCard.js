import React from 'react';
import { Box, Image, Text } from 'grommet';

const ScreenshotCard = ({ label, src, a11yTitle }) => (
  <Box>
    <Image src={src} a11yTitle={a11yTitle} />
    <Text alignSelf="center" color="dark-2" margin={{ top: 'none' }}>
      {label}
    </Text>
  </Box>
);
export default ScreenshotCard;
