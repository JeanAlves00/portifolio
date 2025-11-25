import * as S from "./styles";

const Sobre = () => {
  return (
    <S.SobreContainer>
      <S.Header>
        <S.Avatar>👨‍💻</S.Avatar>
        <S.Title>Desenvolvedor Full Stack</S.Title>
        <S.Subtitle>
          Criando experiências digitais incríveis através de código limpo e
          design inovador.
        </S.Subtitle>
      </S.Header>

      <S.ContentGrid>
        <S.Card>
          <S.CardIcon>💻</S.CardIcon>
          <S.CardTitle>Código Limpo</S.CardTitle>
          <S.CardDescription>
            Escrevo código mantível e escalável seguindo as melhores práticas da
            indústria.
          </S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardIcon>🎨</S.CardIcon>
          <S.CardTitle>Design Criativo</S.CardTitle>
          <S.CardDescription>
            Interfaces bonitas e funcionais que proporcionam ótima experiência
            ao usuário.
          </S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardIcon>⚡</S.CardIcon>
          <S.CardTitle>Performance</S.CardTitle>
          <S.CardDescription>
            Otimização em todos os projetos para garantir velocidade e
            eficiência.
          </S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardIcon>🤝</S.CardIcon>
          <S.CardTitle>Colaboração</S.CardTitle>
          <S.CardDescription>
            Trabalho bem em equipe e comunico de forma clara e efetiva com
            todos.
          </S.CardDescription>
        </S.Card>
      </S.ContentGrid>

      <S.BioSection>
        <S.BioTitle>Sobre Mim</S.BioTitle>
        <S.BioText>
          Sou um desenvolvedor full stack apaixonado por tecnologia e inovação.
          Com experiência em React, TypeScript, Node.js e muito mais, estou
          sempre buscando aprender novas tecnologias e criar soluções criativas.
        </S.BioText>
        <S.BioText>
          Meu objetivo é transformar ideias em produtos digitais de qualidade,
          sempre priorizando a experiência do usuário e a excelência técnica.
        </S.BioText>
      </S.BioSection>
    </S.SobreContainer>
  );
};

export default Sobre;
