import React, { FC, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalBox = styled(Modal)`
  .body {
    padding: 20px 40px;
  }
  .header {
    padding: 15px 40px;
  }
  .image {
    margin: 0 0 20px 0;
    img {
      height: 120px;
      width: 120px;
    }
  }
`;

interface Props {
  show?: boolean;
  handleClose: () => void;
}

const AddNewItemModal: FC<Props> = ({ handleClose, show }) => {
  const [validated, setValidated] = useState(false);
  const [newdata, setNewData] = useState<any>(
    JSON.parse(localStorage.getItem("newdata") as any) || []
  );
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFormat, setImageFormat] = useState("");

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      let data = {
        title,
        image: 'https://picsum.photos/200/300',
        price,
        description
      };
      // console.log(data, "tushar");
      setNewData([...newdata, data]);
      setTitle("");
      setImage("");
      setImageFormat('');
      setPrice("");
      setDescription("");
      setValidated(false);
    }
  };


  const handleImageFormat = (event: any) => {
    setImage(event.target.value)
    var file = event.files[0];  
    var reader = new FileReader();  
    reader.onloadend = function() {  
       let imagebase64 : any = reader.result;  
       setImageFormat(imagebase64)
    }  
    reader.readAsDataURL(file);
  };


  useEffect(() => {
    localStorage.setItem("newdata", JSON.stringify(newdata));
  }, [newdata]);

  return (
    <ModalBox
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="header" closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>

      <Modal.Body className="body">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              value={image}
              onChange={handleImageFormat}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please upload Image.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter product name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter product Price.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <Form.Control.Feedback type="invalid">
              Please enter product Description.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </ModalBox>
  );
};

export default AddNewItemModal;
