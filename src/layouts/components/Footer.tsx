import styled from "styled-components";

const FooterContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
  box-sizing: border-box;
  border-top: 1px solid #e5e7eb;
`;

const FooterContents = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterP = styled.p`
  font-style: normal;
  font-weight: bold;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterP>공지사항</FooterP>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;
