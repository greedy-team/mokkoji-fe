import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  p {
    margin: 10px 0;
  }

  strong {
    font-weight: bold;
    color: #333;
  }
`;

const PrivacyPolicyPage = () => (
  <Container>
    <Title>개인정보 처리 방침</Title>
    <Content>
      <p>
        본 서비스는 이용자의 개인정보를 매우 중요하게 생각하며, 
        『개인정보 보호법』을 준수하고 있습니다. 
        본 개인정보 처리방침은 이용자의 개인정보가 어떠한 방법으로 수집되고, 
        이용되며, 보호되고 있는지에 대해 설명합니다.
      </p>

      <p>
        <strong>1. 수집하는 개인정보의 항목 및 수집 방법</strong><br />
        - 필수 항목: 이름, 학번, 학과, 학년 <br />
        - 선택 항목: 이메일 <br />
      </p>

      <p>
        <strong>2. 개인정보의 수집 및 이용 목적</strong><br />
        - 서비스 제공: 세종대학교 동아리 소개 및 동아리 알림 서비스 운영
      </p>

      <p>
        <strong>3. 개인정보의 보유 및 이용 기간</strong><br />
        이용자의 개인정보는 서비스 제공 기간 동안만 보유 및 이용됩니다.
      </p>

      <p>
        <strong>4. 개인정보의 제3자 제공</strong><br />
        이용자의 동의가 있거나 법령에 의하여 허용된 경우에만 
        개인정보를 제3자에게 제공할 수 있습니다.
      </p>

      <p>
        <strong>5. 개인정보의 파기 절차 및 방법</strong><br />
        이용자의 개인정보는 서비스 제공 기간이 끝난 후 자동으로 정보가 파기됩니다. 
      </p>

      <p>
        본 개인정보 처리방침은 해당 사이트에 적용됩니다. 
      </p>
    </Content>
  </Container>
);

export default PrivacyPolicyPage;
