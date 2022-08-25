import React from "react";
import styled from "styled-components";

import imgmodalclose from "../../images/detail/imgmodalclose.svg";
import modal1 from "../../images/detail/modal1.svg";
import modal2 from "../../images/detail/modal2.svg";
import modal3 from "../../images/detail/modal3.svg";

const MenuImgModal = ({ closeModal, ...rest }) => {
  return (
    <Container>
      <Background onClick={() => closeModal()} />
      <Block>
        <Img src={modal3} />
        <Close src={imgmodalclose} onClick={() => closeModal()} />
      </Block>
    </Container>
  );
};

export default MenuImgModal;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Block = styled.div`
  z-index: 200;
  width: 100%;
  height: auto;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Close = styled.img`
  position: absolute;
  right: 20px;
  margin-top: 20px;
`;
