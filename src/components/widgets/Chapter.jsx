import React, { useEffect, useState } from "react";
import { StyledChapter } from "src/ui/widgets";
import styled from "styled-components";
import { studyTimeInPersian } from "src/utils";
import { StudyTimeIcon } from "src/components/base";
import { FaChevronLeft } from "react-icons/fa6";
import { CircularSegmentedProgress } from "../base/CircularSegmentedProgress";

export const StyledCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.veryLightBlue};
  font-size: 0.8rem;
  width: 100%;
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
  left: 2%;
  cursor: pointer;
`;

export const StyledParagrapgh = styled.p`
  text-align: right;
`;

studyTimeInPersian("10:00");
export const Chapter = ({ details }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(40);
  }, []);

  return (
    <StyledChapter>
      <StyledCard>
        <StyledParagrapgh>فصل 1: مولکول ها در خدمت تندرستی</StyledParagrapgh>
        <StyledStudyTime>
          <span>{studyTimeInPersian("00:00")}</span>
          <StudyTimeIcon />
        </StyledStudyTime>
        <StyledChevron>
          <FaChevronLeft />
        </StyledChevron>
      </StyledCard>
      <CircularSegmentedProgress progress={progress} />
    </StyledChapter>
  );
};
