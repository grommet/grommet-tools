import React from 'react';
import { Box } from 'grommet';
import ScreenshotCard from '../ScreenshotCard.js';

const ScreenShotRow = ({ margin, src, label }) => (
  <Box direction="row-responsive" justify="center" margin={margin} gap="large">
    <ScreenshotCard src={src[0]} label={label[0]} a11yTitle={label[0]} />
    <ScreenshotCard src={src[1]} label={label[1]} a11yTitle={label[1]} />
    <ScreenshotCard src={src[2]} label={label[2]} a11yTitle={label[2]} />
  </Box>
);
export default ScreenShotRow;
