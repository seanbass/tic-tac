import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  height: ${({height}) => height}px;
  width: 0px;
  background-color: ${({color}) => color};
  margin: auto;
  width: 100%;  
  padding: 10px;
  text-align: center;
`;



class Box extends Component {
    render () {
        const {color, height} = this.props;

        return(
            <div>
                <Container color={color} height={height}></Container>
            </div>
        );
    }
}



export default Box;