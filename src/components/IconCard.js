import React from 'react';
import { Card, CardBody } from 'grommet';

const IconCard = (props) => (
  <Card
    margin={props.margin}
    height={props.size}
    width={props.size}
    elevation="xlarge"
    background="white"
    round="large"
  >
    <CardBody>{props.icon}</CardBody>
  </Card>
);

export default IconCard;
