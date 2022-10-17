import React, { FC } from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import carticon from '../../assets/Images/cart_icon.svg'

const HeaderBox = styled.h1`
  background:#000;
  padding:20px 0;
  color:#fff;
  font-size:20px;
  .cart{
    display:flex;
    align-items:center;
    cursor:pointer;
  }
`;
interface Props {
  toggleCart: () => void;
} 



const Header: FC<Props> = ({toggleCart}) => {
  return (
    <HeaderBox>
      <Container>
        <div className="header_box d-flex align-items-center justify-content-between">
          <span onClick={toggleCart}>Shopping Site</span>

          <div className="cart" onClick={toggleCart}>
          <img src={carticon} alt="" className='me-1' />
          <span>0</span>
          </div>

        </div>
        </Container>
      </HeaderBox>
  )
}

export default Header