import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(167, 139, 250, 0.4);
  padding: 20px;
  border-radius: 20px 20px 0 0;
  margin-bottom: 0;
  animation: ${slideDown} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 12px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TabLabel = styled.span`
  display: inline;
  transition: opacity 0.3s ease-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  background: ${({ active }) =>
    active
      ? "linear-gradient(135deg, rgba(167, 139, 250, 0.9) 0%, rgba(96, 165, 250, 0.9) 100%)"
      : "rgba(255, 255, 255, 0.08)"};
  color: ${({ active }) => (active ? "#fff" : "#ccc")};
  border: 1px solid
    ${({ active }) =>
      active ? "rgba(167, 139, 250, 0.9)" : "rgba(255, 255, 255, 0.15)"};
  box-shadow: ${({ active }) =>
    active ? "0 4px 15px rgba(167, 139, 250, 0.4)" : "none"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover ${IconWrapper} {
    transform: scale(1.2) rotate(10deg);
  }

  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(135deg, rgba(167, 139, 250, 1) 0%, rgba(96, 165, 250, 1) 100%)"
        : "rgba(255, 255, 255, 0.15)"};
    border-color: rgba(167, 139, 250, 0.9);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px
      ${({ active }) =>
        active ? "rgba(167, 139, 250, 0.6)" : "rgba(96, 165, 250, 0.4)"};
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    padding: 10px 18px;
    font-size: 15px;
    gap: 6px;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 14px;
    border-radius: 8px;
    gap: 0;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px
        ${({ active }) =>
          active ? "rgba(167, 139, 250, 0.5)" : "rgba(96, 165, 250, 0.3)"};
    }
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 13px;
    border-radius: 6px;

    ${IconWrapper} {
      font-size: 16px;
    }

    &:hover {
      transform: translateY(-1px);
    }
  }
`;
