import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 5px 10px 5px;
  box-sizing: border-box;
  border-top: 1px solid #e5e7eb;
`;

const FooterContents = styled.div`
  width: 90%;
  padding-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const FooterP = styled.p<{ size?: string }>`
  font-size: ${(props) => props.size || "small"};
  font-weight: bold;
  color: #6b7280;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterP size="x-small">© 2024 모꼬지. All rights reserved.</FooterP>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;
