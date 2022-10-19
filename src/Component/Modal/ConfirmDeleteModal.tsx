import React, { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { H3 } from "../Typography";

const ModalBox = styled(Modal)`
  .body {
    padding: 20px 40px;
    text-align:center;
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
  handleConfirm: any;
}

const ConfirmDeleteModal: FC<Props> = ({ handleClose, show, handleConfirm }) => {

  return (
    <ModalBox
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="header" closeButton>

      </Modal.Header>

      <Modal.Body className="body">
        <H3 text="Are You Sure you want to delete this Item" />
        <Button variant="primary" onClick={handleConfirm}>
            Yes
          </Button>
          <Button variant="Secondary" onClick={handleClose}>
            No
          </Button>
      </Modal.Body>
    </ModalBox>
  );
};

export default ConfirmDeleteModal;
