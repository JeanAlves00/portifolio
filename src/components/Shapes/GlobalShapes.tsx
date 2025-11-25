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
  pointer-events: none;
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
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
`;

interface GlobalShapesProps {
  children?: ReactNode;
}

export default function GlobalShapes({ children }: GlobalShapesProps) {
  const squares = useMemo(() => {
    const baseCount = Math.floor((window.innerWidth * window.innerHeight) / 18000);
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
    <>
      <Container>
        {squares.map((sq, i) => (
          <SquareEl key={i} $sq={sq} />
        ))}
      </Container>
      <Content>{children}</Content>
    </>
  );
}
