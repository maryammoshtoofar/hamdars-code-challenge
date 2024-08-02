import styled from "styled-components";

export const StyledProgressCircle = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCircularSVG = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

export const StyledCircleBG = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.colors.lightGray};
  stroke-width: 3.8;
`;

export const StyledCircle = styled.path`
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke: ${({ theme }) => theme.colors.lightBlue};
  stroke-dasharray: ${({ progress }) => `${progress}, 100`};
  transition: stroke-dasharray 1s ease;
`;
