import React from 'react';
import { Box } from 'grommet';
import ScreenshotCard from '../ScreenshotCard.js';

const ScreenShotRow = ({
  margin,
  src0,
  src1,
  src2,
  label0,
  label1,
  label2,
  a11yTitle0,
  a11yTitle1,
  a11yTitle2,
}) => (
  <Box direction="row-responsive" justify="center" margin={margin} gap="large">
    <ScreenshotCard src={src0} label={label0} a11yTitle={a11yTitle0} />
    <ScreenshotCard src={src1} label={label1} a11yTitle={a11yTitle1} />
    <ScreenshotCard src={src2} label={label2} a11yTitle={a11yTitle2} />
  </Box>
);
export default ScreenShotRow;
