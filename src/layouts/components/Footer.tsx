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

// const PrivacyLink = styled(Link)`
//   font-size: small;
//   color: #6b7280;
//   cursor: pointer;
// `;

const BugLink = styled.a`
  font-size: small;
  color: #6b7280;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        {/* <PrivacyLink to="/privacy-policy">개인정보 처리 방침</PrivacyLink> */}
        <BugLink href="https://forms.gle/gd45BFjRng6AZmwU8" target="_blank">
          버그 제보
        </BugLink>
        <FooterP size="x-small">© 2025 모꼬지. All rights reserved.</FooterP>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;
