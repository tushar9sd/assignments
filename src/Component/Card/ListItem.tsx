import React, { FC } from "react";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import styled from "styled-components";
import { H3, Para } from "../Typography";

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
    .deleteicon {
      font-size: 20px;
      fill: red;
    }
    .editicon {
      font-size: 20px;
      fill:#0d6efd;
      margin-right:10px;
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
  price?:number;
  onCardClick?: () => void;
  handleAddToCart?: any;
  handleWishlistbutton?: any;
  removeWishlistbutton?: any;
  addedToCart?: any;
  isWishList?: any;
  onDelete:any;
}
const ListItem: FC<Props> = ({
  image,
  title,
  description,
  price,
  onCardClick,
  handleAddToCart,
  addedToCart,
  handleWishlistbutton,
  removeWishlistbutton,
  isWishList,
  onDelete
}) => {
  return (
    <CardBox onClick={onCardClick}>
      <Row>
        <Col md="1">
          <Card.Img variant="top" src={image} className="image" />
        </Col>
        <Col md="2">
          <H3 text={title} />
        </Col>
        <Col md="3">
          <Para text={description} />
        </Col>
        <Col md="1">
          <H3 text={`$${price}`} />
        </Col>
        <Col md="4" className="gap-1">
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
        <Col md="1">
        <div className="close" onClick={onDelete}>
             {/* <Pencil className="editicon" /> */}
              <Trash className="deleteicon" />
            </div>
            </Col>
      </Row>
    </CardBox>
  );
};

export default ListItem;
