import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "../../Component/Card/ListItem";
import CartItem from "../../Component/Card/CartItem";
import Header from "../../Component/Header";
import { H3, Label, Para } from "../../Component/Typography";
import { cardList } from "../../Utils/helper";
import ItemDescriptionModal from "../../Component/Modal/ItemDescriptionModal";
import AddNewItemModal from "../../Component/Modal/AddNewItemModal";
import ConfirmDeleteModal from "../../Component/Modal/ConfirmDeleteModal";

const getDataFromList = () => {
  const data = localStorage.getItem("newdata");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Home = () => {
  const [list, setList] = useState([...cardList, ...getDataFromList()]);
  const [show, setShow] = useState(false);
  // const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [data, setData] = useState();
  const [cart, setCart] = useState<any>(
    JSON.parse(localStorage.getItem("CART") as any) || []
  );
  const [wishList, setWishList] = useState<any>(
    JSON.parse(localStorage.getItem("wishList") as any) || []
  );

  const handleShow = (item: any) => {
    setData(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);
  // const handleCloseConfirmModal = () => setShowConfirmModal(false);
  // const handleConfirmModal = (id: any, e: any) =>
  // {
  //   e.stopPropagation();
  //   setList(list.filter((item: any) => item.id !== id));
  //   setShow(false);
  // } 

  const handleShowForm = () => {
    // setData(item);
    setShowForm(true);
  };

  const handleCloseForm = () => setShowForm(false);

  const addToCartItem = (item: any, e: any) => {
    e.stopPropagation();
    setCart([...cart, item]);
  };

  const removeListItem = (id: any, e: any) => {
    e.stopPropagation();
    setList(list.filter((item: any) => item.id !== id));
  };

  const removeCartItem = (id: any, e: any) => {
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
          <>
            <Label
              text="Add New Product"
              className="addlink"
              onClick={() => handleShowForm()}
            />
            <Row>
              {list.map((item: any, index: any) => {
                return (
                  <Col md={12} key={index}>
                    <ListItem
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      description={item.description}
                      onCardClick={() => handleShow(item)}
                      handleAddToCart={(e: any) => addToCartItem(item, e)}
                      onDelete={(e: any) => removeListItem(item.id, e)}
                      // onDelete={() => setShowConfirmModal(true)}
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
          </>
        ) : (
          <>
          <H3 text={`${cart.length} Items are in cart.`} className="mt-4 mb-3" />
          <Row>
            {cart.map((item: any, index: number) => {
              return (
                <Col md={4} key={index}>
                  <CartItem
                    image={item.image}
                    title={item.title}
                    onDelete={(e: any) => removeCartItem(item.id, e)}
                  />
                </Col>
              );
            })}
          </Row>
          </>
        )}
      </Container>

      <ItemDescriptionModal show={show} handleClose={handleClose} data={data} />
      <AddNewItemModal show={showForm} handleClose={handleCloseForm} />
      {/* <ConfirmDeleteModal show={showConfirmModal} handleClose={handleCloseConfirmModal} handleConfirm={handleConfirmModal} /> */}
    </>
  );
};
export default Home;
