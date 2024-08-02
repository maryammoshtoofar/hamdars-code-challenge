import styled from "styled-components";

export const StyledProgressCircle = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCircularSVG = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0;
`;

export const StyledCircleBG = styled.circle`
  fill: none;
  stroke-width: 3;
  stroke: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledCircle = styled.circle`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke: ${({ theme }) => theme.colors.blue};
  transition: stroke-dashoffset 0.9s ease;
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: ${({ progress, circumference }) =>
    circumference - (progress / 100) * circumference};
`;
