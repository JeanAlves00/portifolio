import React from "react";
import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Avatar>👨‍💻</S.Avatar>
      <S.Title>Desenvolvedor Full Stack</S.Title>
      <S.Subtitle>
        Criando experiências digitais incríveis através de código limpo e design
        inovador.
      </S.Subtitle>
      <S.SocialLinks>
        <S.SocialButton href="#" title="GitHub">
          🐙
        </S.SocialButton>
        <S.SocialButton href="#" title="LinkedIn">
          💼
        </S.SocialButton>
        <S.SocialButton href="#" title="Email">
          ✉️
        </S.SocialButton>
      </S.SocialLinks>
      <S.DownloadButton>⬇️ Baixar CV</S.DownloadButton>
    </S.HeaderContainer>
  );
};

export default Header;
