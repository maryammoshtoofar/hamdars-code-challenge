import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress, StudyTimeIcon } from "src/components/base";
import { StyledStudyTime } from "src/ui/widgets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";
import { EffectCreative } from "swiper/modules";
import { theme } from "src/styles/Theme";
import { useGetAllUnitsQuery } from "src/redux/features/api/api-slice";
import { formatStudyTime, calcUnitProgress } from "src/utils";
import { useDispatch, useSelector } from "react-redux";
import { setChapters } from "src/redux/features/chapters/chapters-slice";

export const StyledSubjects = styled.div`
  position: fixed;
  top: 65%;
  left: -75%;
  background-color: white;
  z-index: 2;
  border-radius: 150%;
  width: 250%;
  height: 200%;
  overflow: hidden;
  box-shadow: -2px -12px 33px -2px rgba(97, 93, 93, 0.44);
  -webkit-box-shadow: -2px -12px 33px -2px rgba(97, 93, 93, 0.44);
  -moz-box-shadow: -2px -12px 33px -2px rgba(97, 93, 93, 0.44);
`;

export const StyledSubject = styled.div`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.veryLightBlue : theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-top-right-radius: 29px;
  border-top-left-radius: 29px;
  display: flex;
  gap: 0.2rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledSubjectBox = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;

const StyledLevelText = styled.span`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 1.2rem;
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
`;

export const StyledSubjectName = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0 0.2rem;
  text-align: center;
`;

export const StyledLoading = styled.div`
  position: absolute;
  top: 10%;
  left: 44%;
`;
export const Subjects = () => {
  const { data, isLoading } = useGetAllUnitsQuery();
  const [activeSlide, setActiveSlide] = useState(null);
  const { name } = useSelector((state) => state.chapters);
  const dispatch = useDispatch();

  const handleChangeChapters = (id) => {
    const Unit = data.find((unit) => unit.id === id);
    const chapters = Unit.hamdarsQUnitLearningContentDtos;
    dispatch(setChapters({ chapters: chapters, name: Unit.name }));
  };

  useEffect(() => {
    if (data) handleChangeChapters(data[activeSlide].id);
  }, [activeSlide, data]);
  return (
    <StyledSubjects>
      {isLoading && <StyledLoading>...در حال بارگذاری</StyledLoading>}
      <Swiper
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        initialSlide={3}
        loop={true}
        loopedSlides={12}
        grabCursor={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        slidesPerView={4}
        spaceBetween={50}
        modules={[EffectCreative]}
        effect={"creative"}
        creativeEffect={{
          perspective: true,
          limitProgress: 3,
          prev: {
            translate: ["-160%", "20%", -100],
          },
          next: {
            translate: ["140%", "20%", -100],
          },
        }}
        className="mySwiper"
      >
        {data &&
          data.map((unit) => {
            const progress = calcUnitProgress(
              unit.hamdarsUserCurrentUnitLevelPoint,
              unit.hamdarsUserMaxUnitLevelPoint,
              unit.hamdarsUserMinUnitLevelPoint
            );
            return (
              <SwiperSlide
                className="swiper-slide"
                key={unit.id}
                id={unit.id}
                onClick={() => handleChangeChapters(unit.id)}
              >
                <StyledSubject active={unit.name === name}>
                  <CircularProgress progress={progress}>
                    <Image src={unit.unit_icon} alt={unit.name} />
                  </CircularProgress>
                  <StyledSubjectBox active={unit.name === name}>
                    <StyledLevelText>
                      سطح {unit.hamdarsUserUnitLevelIndex}
                    </StyledLevelText>
                    <StyledSubjectName>{unit.name}</StyledSubjectName>
                    <StyledStudyTime>
                      <span>{formatStudyTime(unit.sum_user_study)}</span>
                      <StudyTimeIcon color={theme.colors.black} />
                    </StyledStudyTime>
                  </StyledSubjectBox>
                </StyledSubject>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </StyledSubjects>
  );
};
