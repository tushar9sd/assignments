import React, { FC } from "react";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const CardBox = styled.div`
  margin: 12px 0;
  cursor: pointer;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f5f5f5;
  padding: 10px;
  .image {
    height: 80px;
    width: 80px;
  }
  p {
    margin: 0;
  }

  .close {
    cursor: pointer;
    svg {
      font-size: 24px;
      fill: red;
    }
  }
  .row div {
    display: flex;
    align-items: center;
  }
`;

interface Props {
  image: string;
  title: string;
  description?: string;
  onCardClick?: () => void;
  handleAddToCart?: any;
  handleWishlistbutton?: any;
  removeWishlistbutton?: any;
  addedToCart?: any;
  isWishList?: any;
}
const ShoppingCard: FC<Props> = ({
  image,
  title,
  description,
  onCardClick,
  handleAddToCart,
  addedToCart,
  handleWishlistbutton,
  removeWishlistbutton,
  isWishList,
}) => {
  return (
    <CardBox onClick={onCardClick}>
      <Row>
        <Col md="1">
          <Card.Img variant="top" src={image} className="image" />
        </Col>
        <Col md="2">
          <Card.Title className="title">{title}</Card.Title>
        </Col>
        <Col md="5">
          <Card.Text className="description">{description}</Card.Text>
        </Col>
        <Col md="4" className="gap-3">
          <Button
            variant="primary"
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            {addedToCart ? 'Added to Cart' : 'Add to Cart'}
          </Button>

          <ButtonGroup className="me-2" aria-label="First group">
            <Button
              variant="warning"
              onClick={handleWishlistbutton}
              disabled={isWishList}
            >
              {isWishList ? "Added to Wishlist" : "Wishlist"}{" "}
            </Button>
            {isWishList && (
              <Button variant="danger" onClick={removeWishlistbutton}>
                X
              </Button>
            )}
          </ButtonGroup>
        </Col>
      </Row>
    </CardBox>
  );
};

export default ShoppingCard;
