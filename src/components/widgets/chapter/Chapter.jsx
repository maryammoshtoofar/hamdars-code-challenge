import React, { useEffect, useState } from "react";
import {
  StyledChapter,
  StyledCard,
  StyledParagraph,
  StyledStudyTime,
  StyledChevron,
} from "src/ui/widgets";
import { studyTimeInPersian } from "src/utils";
import { StudyTimeIcon } from "src/components/base";
import { FaChevronLeft } from "react-icons/fa6";
import { CircularSegmentedProgress } from "src/components/base";

studyTimeInPersian("10:00");
export const Chapter = ({ details }) => {
  const [progress, setProgress] = useState(40);

  return (
    <StyledChapter>
      <StyledCard>
        <StyledParagraph>فصل 1</StyledParagraph>
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
