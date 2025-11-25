import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SobreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

export const Avatar = styled.div`
  font-size: 80px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(167, 139, 250, 0.3);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${scaleIn} 0.6s ease-out;
  box-shadow: 0 8px 32px rgba(167, 139, 250, 0.2);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 60px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    font-size: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #bbb;
  margin: 0;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(167, 139, 250, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(167, 139, 250, 0.2);
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const CardIcon = styled.div`
  font-size: 50px;
  margin-bottom: 15px;
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: #fff;
  margin: 0 0 10px 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const BioSection = styled.div`
  background: rgba(167, 139, 250, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 15px;
  padding: 30px;
  animation: ${fadeInUp} 0.7s ease-out 0.1s both;

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const BioTitle = styled.h2`
  font-size: 28px;
  color: #fff;
  margin: 0 0 20px 0;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

export const BioText = styled.p`
  font-size: 16px;
  color: #ccc;
  line-height: 1.8;
  margin: 0 0 15px 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;
