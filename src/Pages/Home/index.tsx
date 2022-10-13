import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShoppingCard from "../../Component/Card";
import Header from "../../Component/Header";
import ItemDetails from "../../Component/Modal";
import { cardList } from "../../Utils/helper";

const Home = () => {
  const [list, setList] = useState(cardList);
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    setData(item);
    setShow(true);
  };

  const removeItem = (id: any) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          {list.map((item, index) => {
            return (
              <Col md={12} key={index}>
                <ShoppingCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  closeIcon={item.closeIcon}
                  onDelete={() => removeItem(item.id)}
                  onCardClick={() => handleShow(item)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      <ItemDetails show={show} handleClose={handleClose} data={data} />
    </>
  );
};
export default Home;
