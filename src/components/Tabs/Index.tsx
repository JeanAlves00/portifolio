import React from "react";
import {
  FaCode,
  FaLightbulb,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import * as S from "./styles";

type TabsProps = {
  currentTab: string;
  onChange: (tab: string) => void;
};

const tabConfig = [
  { id: "sobre", label: "Sobre", icon: FaCode },
  { id: "habilidades", label: "Habilidades", icon: FaLightbulb },
  { id: "projetos", label: "Projetos", icon: FaProjectDiagram },
  { id: "experiencia", label: "Experiência", icon: FaBriefcase },
  { id: "contato", label: "Contato", icon: FaEnvelope },
];

const Tabs: React.FC<TabsProps> = ({ currentTab, onChange }) => {
  return (
    <S.TabsContainer>
      {tabConfig.map(({ id, label, icon: Icon }) => (
        <S.TabButton
          key={id}
          active={currentTab === id}
          onClick={() => onChange(id)}
          title={label}
        >
          <S.IconWrapper>
            <Icon />
          </S.IconWrapper>
          <S.TabLabel>{label}</S.TabLabel>
        </S.TabButton>
      ))}
    </S.TabsContainer>
  );
};

export default Tabs;
