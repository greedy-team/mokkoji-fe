import ModalSection from "@/components/ModalSection";
import styled from "styled-components";
import Wrench from "@/assets/wrench.svg?react";

const MaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
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

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SystemMaintenance() {
  return (
    <Background>
      <ModalSection>
        <MaintenanceContainer>
          <Wrench width={50} height={50} />
          <MaintenanceText>시스템 점검 중입니다</MaintenanceText>
          <SubText>
            더 나은 서비스를 위해 시스템 점검을 진행하고 있습니다.
          </SubText>
        </MaintenanceContainer>
      </ModalSection>
    </Background>
  );
}

export default SystemMaintenance;
