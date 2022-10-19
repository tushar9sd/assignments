import React, { FC } from "react";
import {Card } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import styled from "styled-components";

const CardBox = styled.div`
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f5f5f5;
  padding: 10px;
  display:flex;
  flex-direction:column;
  align-items: center;

  .image {
    height: 80px;
    width: 80px;
    margin:12px 0;
  }
  .close {
    cursor: pointer;
    margin:12px 0;
    svg {
      font-size: 24px;
      fill: red;
    }
  }
`;

interface Props {
  image: string;
  title: string;
  onDelete?: any;
}
const CartItem: FC<Props> = ({
  image,
  title,
  onDelete
}) => {
  return (
    <CardBox>
          <Card.Img variant="top" src={image} className="image" />
          <Card.Title className="title">{title}</Card.Title>
            <div className="close" onClick={onDelete}>
              <Trash />
            </div>
    </CardBox>
  );
};

export default CartItem;
