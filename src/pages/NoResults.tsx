import styled from "styled-components";
import NoResult from "@/assets/error/NoResults.svg?react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10%;
  align-items: center;
  text-align: center;
  color: #4b5563;
`;

const Message = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  text-align: center;
`;

const SubMessage = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #6b7280;
  text-align: center;
`;

function NoResults() {
  return (
    <Container>
      <NoResult width={150} height={150} />
      <Message>
        <br />
        검색 결과를 찾을 수 없습니다
      </Message>
      <SubMessage>
        입력하신 검색어에 대한 검색 결과가 없습니다 👀 <br />
        다른 검색어를 입력해 주세요!
      </SubMessage>
    </Container>
  );
}

export default NoResults;
