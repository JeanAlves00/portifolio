import GlobalShapes from "./components/Shapes/GlobalShapes";
import GlobalStyles from "./styles/GlobalStyles";
import { useState } from "react";
import Sobre from "./pages/Sobre/Index";
import Habilidades from "./pages/Habilidades/Index";
import Projetos from "./pages/Projetos/Index";
import Experiencia from "./pages/Experiencia/Index";
import Contato from "./pages/Contato/Index";
import Tabs from "./components/Tabs/Index";
import styled from "styled-components";

const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  height: 90vh;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideIn 0.6s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  animation: fadeIn 0.8s ease-out 0.2s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(167, 139, 250, 0.5);
    border-radius: 4px;

    &:hover {
      background: rgba(167, 139, 250, 0.8);
    }
  }
`;

function App() {
  const [tab, setTab] = useState("sobre");

  const renderContent = () => {
    switch (tab) {
      case "sobre":
        return <Sobre />;
      case "habilidades":
        return <Habilidades />;
      case "projetos":
        return <Projetos />;
      case "experiencia":
        return <Experiencia />;
      case "contato":
        return <Contato />;
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyles />
      <GlobalShapes>
        <Container>
          <Tabs currentTab={tab} onChange={setTab} />
          <Content>{renderContent()}</Content>
        </Container>
      </GlobalShapes>
    </>
  );
}

export default App;
