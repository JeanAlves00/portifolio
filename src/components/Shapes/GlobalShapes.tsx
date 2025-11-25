import { useMemo } from "react";
import type { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type Square = {
  size: number;
  color: string;
  top: number;
  left: number;
  animation: ReturnType<typeof keyframes>;
};

const move1 = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const move2 = keyframes`
  0% { transform: translateX(0px) rotate(0deg); }
  50% { transform: translateX(15px) rotate(-10deg); }
  100% { transform: translateX(0px) rotate(0deg); }
`;

const move3 = keyframes`
  0% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(1); }
`;

const animations = [move1, move2, move3];

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const SquareEl = styled.div<{ $sq: Square }>`
  position: absolute;
  width: ${({ $sq }) => $sq.size}px;
  height: ${({ $sq }) => $sq.size}px;
  background: ${({ $sq }) => $sq.color};
  opacity: 0.6;
  top: ${({ $sq }) => $sq.top}%;
  left: ${({ $sq }) => $sq.left}%;
  animation: ${({ $sq }) => $sq.animation} 6s infinite ease-in-out;
  filter: blur(2px);
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
`;

const BackgroundAnimation = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  background: linear-gradient(45deg, #1a0033, #2d1b4e, #1a0033);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,..."); /* seu SVG pixel art aqui */
    background-size: 100px;
    opacity: 0.1;
    animation: spin 30s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface GlobalShapesProps {
  children?: ReactNode;
}

export default function GlobalShapes({ children }: GlobalShapesProps) {
  const squares = useMemo(() => {
    const baseCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 18000,
    );
    const colors = ["#00faff", "#ff00d4", "#8b5cf6", "#ffe600", "#00ff85"];

    const list: Square[] = [];
    for (let i = 0; i < baseCount; i++) {
      list.push({
        size: Math.random() > 0.5 ? 40 : 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        top: Math.random() * 100,
        left: Math.random() * 100,
        animation: animations[Math.floor(Math.random() * animations.length)],
      });
    }
    return list;
  }, []);

  return (
    <Container>
      <BackgroundAnimation />
      {squares.map((sq, i) => (
        <SquareEl key={i} $sq={sq} />
      ))}
      <Content>{children}</Content>
    </Container>
  );
}
