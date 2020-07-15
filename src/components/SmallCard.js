import React,  {Component} from 'react';
import {
  Box,
  Text
} from 'grommet'



export default class SmallCard extends Component{
  render(){
    return(
      <Box
        height='xsmall'
        width='xsmall'
        background='rgb(255,255,255)'
        round='medium'
        justify='center'
        align='center'
        alignContent='center'
        elevation='medium'

        >
        <Box alignSelf='center'>
          {this.props.icon}
        </Box>
        <Text 
          alignSelf='center' 
          size='small'
          color={this.props.textColor}
          >
            {this.props.text}
        </Text>
      </Box>
    )
  }
}
