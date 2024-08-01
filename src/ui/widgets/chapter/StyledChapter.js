import styled from "styled-components";

export const StyledChapter = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  justify-content: center;
`;

export const StyledCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.veryLightBlue};
  font-size: 0.8rem;
  width: 236px;
  height: 64px;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: -1px 11px 8px -4px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: -1px 11px 8px -4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: -1px 11px 8px -4px rgba(0, 0, 0, 0.05);
`;

export const StyledStudyTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledChevron = styled.span`
  position: absolute;
  top: 40%;
  left: 5%;
  cursor: pointer;
`;

export const StyledParagraph = styled.p`
  text-align: right;
`;
