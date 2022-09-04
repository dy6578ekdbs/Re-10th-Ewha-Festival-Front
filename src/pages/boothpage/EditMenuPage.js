import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "../../components/EditMenu/MenuItem";
import Footer from "../../components/Footer/Footer";
import { Pretendard } from "../../components/Text";
import TitleBar from "../../components/TitleBar";

const EditMenuPage = () => {
  const [item, setItem] = useState(null);

  const onSubmit = () => {
    if (item !== null) {
      navigate(`/editmenu/${item}`);
    } else {
      alert("수정할 메뉴를 선택하세요");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>메뉴 </span>
        <span style={{ color: "var(--green2)" }}>정보 </span>
        <span style={{ color: "var(--green3)" }}>수정</span>
      </TitleBar>
      <br />
      <ContentWrapper>
        <Pretendard color="var(--green3)" weight="400" size="14px">
          <span>수정할 메뉴를 선택하세요</span>
        </Pretendard>
        <MenuItem setItem={setItem} />
        <Pretendard color="var(--white)" weight="600" size="16px">
          <Button onClick={onSubmit}>수정하기</Button>
        </Pretendard>
      </ContentWrapper>
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default EditMenuPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  padding: 12px;
  background: linear-gradient(90deg, #004628 0%, #107047 100%);
`;
