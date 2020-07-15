import React,  {Component} from 'react';

import {
  Anchor,
  Box,
  Paragraph,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading
} from 'grommet'

 export default class GridCard extends Component{
  render(){
    return(
      <Card background='rgb(255,255,255)'>
        <Box margin={{horizontal:'medium', top: 'large'}}>
          {this.props.icon}
        </Box>
        <CardHeader>
          <Heading margin={{horizontal:'medium', vertical: 'xsmall'}}>{this.props.heading}</Heading>
        </CardHeader>
        <CardBody>
          <Paragraph alignSelf='start' margin={{horizontal:'medium', vertical: 'xsmall'}}>
            {this.props.text}
          </Paragraph>
        </CardBody>
        <Box
          round="medium"
          background={this.props.buttonColor}
          margin={{horizontal:'medium', vertical: 'small'}}
          alignSelf='start'
          width='auto'
          >
          <Anchor
            margin='small'
            color='rgb(0,0,0)'
            >
            Open {this.props.heading}
          </Anchor>
        </Box>
        <CardFooter
        background={this.props.buttonColor}
        margin={{top:'xlarge'}}
        alignContent='end'
        justify='end'>
        <Anchor
        alignSelf='center'
        href='#'
        margin='xsmall'
        label='Learn More'
        />
        </CardFooter>
      </Card>
    )
  }
}
