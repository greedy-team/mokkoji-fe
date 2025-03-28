import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 45px;
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

const PrivacyLink = styled(Link)`
  font-size: small;
  color: #6b7280;
  cursor: pointer;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <PrivacyLink to="/privacy-policy">개인정보 처리 방침</PrivacyLink>
        <FooterP size="x-small">© 2024 모꼬지. All rights reserved.</FooterP>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;
