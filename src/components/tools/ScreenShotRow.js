import React from 'react';
import { Box } from 'grommet';
import { ScreenshotCard } from '../index.js';

const ScreenShotRow = ({ src, label, ...rest }) => (
  <Box direction="row-responsive" justify="center" gap="small" {...rest}>
    {src.map((val, i) => (
      <ScreenshotCard
        src={val}
        label={label && label.length ? label[i] : ''}
        a11yTitle={label && label.length ? label[i] : 'Screenshot'}
      />
    ))}
  </Box>
);
export { ScreenShotRow };
