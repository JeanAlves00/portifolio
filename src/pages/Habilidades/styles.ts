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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fillProgress = keyframes`
  from {
    width: 0%;
  }
`;

export const HabilidadesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 42px;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #aaa;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const SkillCard = styled.div<{ $delay?: number }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out ${({ $delay }) => $delay}s both;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(167, 139, 250, 0.4);
    transform: translateY(-15px);
    box-shadow: 0 15px 50px rgba(167, 139, 250, 0.2);
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const CategoryIcon = styled.div`
  font-size: 50px;
  margin-bottom: 15px;
  display: inline-block;
  transition: transform 0.3s ease-out;

  ${SkillCard}:hover & {
    transform: scale(1.2) rotate(10deg);
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 22px;
  color: #fff;
  margin: 0 0 20px 0;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SkillItem = styled.li<{ $index?: number }>`
  padding: 10px 15px;
  background: rgba(167, 139, 250, 0.15);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 8px;
  color: #e0d4ff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease-out;
  animation: ${slideInLeft} 0.5s ease-out
    ${({ $index }) => ($index || 0) * 0.1}s both;

  &:hover {
    background: rgba(167, 139, 250, 0.3);
    border-color: rgba(167, 139, 250, 0.6);
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 12px;
  }
`;

export const ProgressSection = styled.div`
  background: rgba(167, 139, 250, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 15px;
  padding: 40px;
  animation: ${fadeInUp} 0.7s ease-out 0.2s both;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ProgressTitle = styled.h2`
  font-size: 28px;
  color: #fff;
  margin: 0 0 30px 0;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SkillName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #e0d4ff;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.2);
`;

export const ProgressFill = styled.div<{ $percentage: number }>`
  height: 100%;
  background: linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%);
  border-radius: 10px;
  animation: ${fillProgress} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  width: ${({ $percentage }) => $percentage}%;
  box-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
`;

export const PercentageText = styled.span`
  font-size: 13px;
  color: #a78bfa;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
