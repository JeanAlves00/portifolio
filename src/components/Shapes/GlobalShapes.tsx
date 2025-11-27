import { useMemo } from "react";
import type { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 0.8; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.5); }
`;

const rotateSpin = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
`;

const cornerToCorner = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(100vw, 0) rotate(90deg); }
  50% { transform: translate(100vw, 100vh) rotate(180deg); }
  75% { transform: translate(0, 100vh) rotate(270deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const floatBounce = keyframes`
  0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  25% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
  50% { transform: translateY(-10px) translateX(-30px) rotate(180deg); }
  75% { transform: translateY(20px) translateX(15px) rotate(270deg); }
  100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
`;

const pulseGrow = keyframes`
  0% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 0.8; transform: scale(1.2); }
  100% { opacity: 0.3; transform: scale(0.8); }
`;

const slideAcross = keyframes`
  0% { transform: translateX(-100vw) rotate(0deg); opacity: 0; }
  50% { opacity: 0.8; }
  100% { transform: translateX(100vw) rotate(360deg); opacity: 0; }
`;

const wobble = keyframes`
  0% { transform: translateY(0) skewX(0deg); }
  25% { transform: translateY(-20px) skewX(5deg); }
  50% { transform: translateY(10px) skewX(-5deg); }
  75% { transform: translateY(-10px) skewX(3deg); }
  100% { transform: translateY(0) skewX(0deg); }
`;

const animations = [
  fadeInOut,
  rotateSpin,
  cornerToCorner,
  floatBounce,
  pulseGrow,
  slideAcross,
  wobble,
];

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const ShapeEl = styled.div<{
  $shape: {
    size: number;
    color: string;
    top: number;
    left: number;
    animation: ReturnType<typeof keyframes>;
  };
}>`
  position: absolute;
  width: ${({ $shape }) => $shape.size}px;
  height: ${({ $shape }) => $shape.size}px;
  background: ${({ $shape }) => $shape.color};
  opacity: 0.6;
  top: ${({ $shape }) => $shape.top}%;
  left: ${({ $shape }) => $shape.left}%;
  animation: ${({ $shape }) => $shape.animation} 12s infinite ease-in-out;
  filter: blur(3px) drop-shadow(0 0 10px ${({ $shape }) => $shape.color});
  pointer-events: none;
  border-radius: 50%;
  box-shadow:
    0 0 25px ${({ $shape }) => $shape.color}aa,
    inset 0 0 15px ${({ $shape }) => $shape.color}55;
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

interface GlobalShapesProps {
  children?: ReactNode;
}

export default function GlobalShapes({ children }: GlobalShapesProps) {
  const shapes = useMemo(() => {
    const baseCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000,
    );
    const colors = [
      "#FF00FF",
      "#00FFFF",
      "#FFD700",
      "#FF1493",
      "#00FF00",
      "#FF6347",
      "#1E90FF",
      "#00FF7F",
      "#FF4500",
      "#00CED1",
      "#9D4EDD",
      "#FF006E",
    ];
    const sizes = [15, 20, 30, 40, 50, 60];

    const list = [];
    for (let i = 0; i < baseCount; i++) {
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

      list.push({
        size: randomSize,
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
      {shapes.map((shape, i) => (
        <ShapeEl key={i} $shape={shape} />
      ))}
      <Content>{children}</Content>
    </Container>
  );
}
