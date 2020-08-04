import React from 'react';
import { Box, Image, Text } from 'grommet';

const ScreenshotCard = ({ label, src, a11yTitle }) => (
  <Box>
    <Image src={src} a11yTitle={a11yTitle} />
    <Text
      textAlign="center"
      color="dark-2"
      margin={{ top: 'none', bottom: 'large' }}
    >
      {label}
    </Text>
  </Box>
);
export { ScreenshotCard };
