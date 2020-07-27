import React from 'react';
import { Box } from 'grommet';
import ScreenshotCard from '../ScreenshotCard.js';

const ScreenShotRow = ({ src, label, ...rest }) => (
  <Box direction="row-responsive" justify="center" gap="large" {...rest}>
    {src.map((val, i) => (
      <ScreenshotCard src={val} label={label[i]} a11yTitle={label[i]} />
    ))}
  </Box>
);
export default ScreenShotRow;
