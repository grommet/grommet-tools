import React from 'react';
import { Card } from 'grommet';

const IconCard = ({ margin, icon, size }) => (
  <Card
    pad="large"
    margin={margin}
    height={size}
    width={size}
    elevation="xlarge"
    background="white"
    round="large"
  >
    {icon}
  </Card>
);

export { IconCard };
