import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShoppingCard from "../../Component/Card";
import CartItem from "../../Component/Card/CartItem";
import Header from "../../Component/Header";
import ItemDetails from "../../Component/Modal";
import { cardList } from "../../Utils/helper";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [data, setData] = useState();
  const [cart, setCart] = useState<any>(
    JSON.parse(localStorage.getItem("CART") as any) || []
  );
  const [wishList, setWishList] = useState<any>(
    JSON.parse(localStorage.getItem("wishList") as any) || []
  );

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    setData(item);
    setShow(true);
  };

  const addToCartItem = (item: any, e: any) => {
    e.stopPropagation();
    setCart([...cart, item]);
  };

  const removeItem = (id: any, e: any) => {
    e.stopPropagation();
    setCart(cart.filter((item: any) => item.id !== id));
  };

  const addtoWishlistItem = (item: any, e: any) => {
    e.stopPropagation();
    setWishList([...wishList, item]);
  };

  const removeWishlistItem = (id: any, e: any) => {
    e.stopPropagation();
    setWishList(wishList.filter((item: any) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <>
      <Header
        toggleCart={() => setShowTable(!showTable)}
        count={cart?.length}
      />
      <Container>
        {showTable ? (
          <Row>
            {cardList.map((item, index) => {
              return (
                <Col md={12} key={index}>
                  <ShoppingCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    onCardClick={() => handleShow(item)}
                    handleAddToCart={(e: any) => addToCartItem(item, e)}
                    addedToCart={
                      cart.findIndex((obj: any) => obj.id === item.id) !== -1
                    }
                    handleWishlistbutton={(e: any) =>
                      addtoWishlistItem(item, e)
                    }
                    isWishList={
                      wishList.findIndex((obj: any) => obj.id === item.id) !==
                      -1
                    }
                    removeWishlistbutton={(e: any) =>
                      removeWishlistItem(item.id, e)
                    }
                  />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Row>
            {cart.map((item: any, index: number) => {
              return (
                <Col md={4} key={index}>
                  <CartItem
                    image={item.image}
                    title={item.title}
                    onDelete={(e: any) => removeItem(item.id, e)}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>

      <ItemDetails show={show} handleClose={handleClose} data={data} />
    </>
  );
};
export default Home;
