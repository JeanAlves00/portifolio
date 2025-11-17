import { useMemo } from "react";
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
  0% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.4; transform: scale(1); }
`;

const animations = [move1, move2, move3];

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const SquareEl = styled.div<{ $sq: Square }>`
  position: absolute;
  width: ${({ $sq }) => $sq.size}px;
  height: ${({ $sq }) => $sq.size}px;
  background: ${({ $sq }) => $sq.color};
  opacity: 0.8;
  top: ${({ $sq }) => $sq.top}%;
  left: ${({ $sq }) => $sq.left}%;
  animation: ${({ $sq }) => $sq.animation} 6s infinite ease-in-out;
`;


export default function GlobalShapes() {
  const squares = useMemo(() => {
    // quantidade varia com o tamanho da tela
    const baseCount = Math.floor((window.innerWidth * window.innerHeight) / 18000);

    const colors = ["#00faff", "#ff00d4", "#8b5cf6", "#ffe600", "#00ff85"]; // neon retro

    const list: Square[] = [];
    for (let i = 0; i < baseCount; i++) {
      list.push({
        size: Math.random() > 0.5 ? 40 : 18, // grande ou pequeno
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
      {squares.map((sq, i) => (
        <SquareEl key={i} $sq={sq} />
      ))}
    </Container>
  );
}
