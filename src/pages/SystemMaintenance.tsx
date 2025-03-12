import styled from "styled-components";
import Wrench from "@/assets/wrench.svg?react";

const MaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  
  @media (max-width: 770px) {
    margin-top: 60px;
  }
`;

const MaintenanceText = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
`;

function SystemMaintenance() {
  return (
    <>
      <MaintenanceContainer>
        <Wrench width={50} height={50} />
        <MaintenanceText>🛠️서비스 준비 중입니다.🛠️</MaintenanceText>
        <SubText>
          보다 나은 서비스를 제공하기 위해 열심히 개발 중이오니, 이용에 불편을
          드린 점 양해 부탁드립니다.
        </SubText>
      </MaintenanceContainer>
    </>
  );
}

export default SystemMaintenance;
