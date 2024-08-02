import React from "react";
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

export const Chapter = ({ chapter, name }) => {
  const progress = 60;
  const { hamdarsQUnitLearningContentTypeDesc } = chapter;

  return (
    <StyledChapter>
      <StyledCard>
        <StyledParagraph>
          {hamdarsQUnitLearningContentTypeDesc}:{name}
        </StyledParagraph>
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
