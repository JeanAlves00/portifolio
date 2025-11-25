import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  margin-bottom: 30px;
`;

export const Avatar = styled.div`
  font-size: 60px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 30px;
  max-width: 600px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

export const SocialButton = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

export const DownloadButton = styled.button`
  padding: 12px 30px;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(167, 139, 250, 0.4);
  }
`;
