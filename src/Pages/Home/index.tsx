import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShoppingCard from "../../Component/Card";
import CartItem from "../../Component/Card/CartItem";
import Header from "../../Component/Header";
import ItemDetails from "../../Component/Modal";
import { cardList } from "../../Utils/helper";

const Home = () => {
  const [list, setList] = useState(cardList);
  const [show, setShow] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [data, setData] = useState();
  const [cart, setCart] = useState<any>(JSON.parse(localStorage.getItem('CART') as any) || []);

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    setData(item);
    setShow(true);
  };

  const removeItem = (id: any, e:any) => {
    e.stopPropagation();
    setCart(cart.filter((item :any) => item.id !== id));
  };


  const addToCartItem = (item: any, e:any) => {
    e.stopPropagation()
    setCart([...cart, item]);
  };

  useEffect(() =>{
    localStorage.setItem('CART', JSON.stringify(cart));
  },[cart]);

  console.log(cart, 'testing');

  return (
    <>
      <Header toggleCart={() => setShowTable(!showTable)} />
      <Container>
      
      {
        showTable
      ?
       <Row>
          {list.map((item, index) => {
            return (
              <Col md={12} key={index}>
                <ShoppingCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  handleAddToCart={(e : any) => addToCartItem(item, e)}
                  onCardClick={() => handleShow(item)}
                  addedToCart={cart.findIndex((obj : any) => obj.id === item.id) !== -1}
                />
              </Col>
            );
          })}
        </Row>
        :
        <Row>
        {cart.map((item:any, index:number) => {
          return (
            <Col md={4} key={index}>
              <CartItem
                image={item.image}
                title={item.title}
                onDelete={(e : any) => removeItem(item.id, e)}
              />
            </Col>
          );
        })}
      </Row>
}
      </Container>

      <ItemDetails show={show} handleClose={handleClose} data={data} />
    </>
  );
};
export default Home;
