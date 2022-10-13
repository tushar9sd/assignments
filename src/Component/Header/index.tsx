import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const HeaderBox = styled.h1`
  background:#000;
  padding:20px 0;
  color:#fff;
  font-size:20px;
`;


const Header = () => {
  return (
    <HeaderBox>
      <Container>
        Shopping Site
        </Container>
      </HeaderBox>
  )
}

export default Header