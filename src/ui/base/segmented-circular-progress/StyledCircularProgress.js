import styled from "styled-components";

export const ProgressCircle = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SVG = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

export const CircleBG = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.colors.lightGray};
  stroke-width: 3.8;
`;

export const InnerCircle = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.colors.veryLightGray};
  stroke-width: 1.8;
`;

export const Circle = styled.path`
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke: ${({ theme }) => theme.colors.yellow};
`;

export const Image = styled.svg`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;
