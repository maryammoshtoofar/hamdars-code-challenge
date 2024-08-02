import React from "react";
import { useSelector } from "react-redux";
import { StyledChapters } from "src/ui/widgets";
import { Chapter } from "src/components/widgets";
import { useGetAllUnitsQuery } from "src/redux/features/api/api-slice";
import styled from "styled-components";

const StyledNoData = styled.div`
  text-align: center;
`;

export const Chapters = () => {
  const { chapters, name } = useSelector((state) => state.chapters);
  const { isLoading } = useGetAllUnitsQuery();

  return (
    <StyledChapters>
      {chapters.map((chapter, index) => (
        <Chapter key={index} chapter={chapter} name={name} />
      ))}
      {!chapters.length && !isLoading && (
        <StyledNoData>اطلاعاتی برای نمایش وجود ندارد</StyledNoData>
      )}
      {isLoading && <StyledNoData>...در حال بارگذاری</StyledNoData>}
    </StyledChapters>
  );
};
