import React, { FC } from "react";
import { Image, Modal } from "react-bootstrap";
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
    data: any;
    show?: boolean;
    handleClose: () => void;
  }

const ItemDescriptionModal: FC<Props> = ({handleClose, show, data}) => {
  return (
    <ModalBox
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="header" closeButton>
        <Modal.Title>Item Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="body">
        <div className="image">
          <Image src={data?.image} alt="" />
        </div>
        <h6>
          Item Name: <span>{data?.title}</span>
        </h6>
        <h6>
          Item Price: <span>{data?.price}</span>
        </h6>
        <h6>
          Item Description: <span>{data?.description}</span>
        </h6>
      </Modal.Body>
    </ModalBox>
  );
};

export default ItemDescriptionModal;
