import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress, StudyTimeIcon } from "src/components/base";
import { StyledStudyTime } from "src/ui/widgets";
import { studyTimeInPersian } from "src/utils";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./style.css";

// import required modules
import { EffectCreative } from "swiper/modules";
import { theme } from "../../../styles/Theme";

export const StyledSubjects = styled.div`
  position: fixed;
  top: 70%;
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
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.black};
  border-top-right-radius: 29px;
  border-top-left-radius: 29px;
  padding-bottom: 0.5rem;
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledSubjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
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
  font-size: 0.5rem;
  padding: 0.2rem 0.4rem;
`;

export const StyledSubjectName = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.6rem;
`;
export const Subjects = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <StyledSubjects>
      <Swiper
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
            // origin: "bottom",
          },
          next: {
            translate: ["140%", "20%", -100],
            // origin: "bottom",
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            <StyledSubjectBox>
              <StyledLevelText>سطح 0</StyledLevelText>
              <StyledSubjectName>شیمی 3</StyledSubjectName>
              <StyledStudyTime>
                <span>{studyTimeInPersian("23:30")}</span>
                <StudyTimeIcon color={theme.colors.black} />
              </StyledStudyTime>
            </StyledSubjectBox>
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/biology.png" alt="biology" />
            </CircularProgress>
            <StyledSubjectBox>
              <StyledLevelText>سطح 1</StyledLevelText>
              <StyledSubjectName>شیمی 3</StyledSubjectName>
              <StyledStudyTime>
                <span>{studyTimeInPersian("23:30")}</span>
                <StudyTimeIcon color={theme.colors.black} />
              </StyledStudyTime>
            </StyledSubjectBox>
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/dini.png" alt="dini" />
            </CircularProgress>
            <StyledSubjectBox>
              <StyledLevelText>سطح 2</StyledLevelText>
              <StyledSubjectName>شیمی 3</StyledSubjectName>
              <StyledStudyTime>
                <span>{studyTimeInPersian("23:30")}</span>
                <StudyTimeIcon color={theme.colors.black} />
              </StyledStudyTime>
            </StyledSubjectBox>
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/geometry.png" alt="geometry" />
            </CircularProgress>
            <StyledSubjectBox>
              <StyledLevelText>سطح 3</StyledLevelText>
              <StyledSubjectName>شیمی 3</StyledSubjectName>
              <StyledStudyTime>
                <span>{studyTimeInPersian("23:30")}</span>
                <StudyTimeIcon color={theme.colors.black} />
              </StyledStudyTime>
            </StyledSubjectBox>
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/math.png" alt="math" />
            </CircularProgress>
            <StyledSubjectBox>
              <StyledLevelText>سطح 4</StyledLevelText>
              <StyledSubjectName>شیمی 3</StyledSubjectName>
              <StyledStudyTime>
                <span>{studyTimeInPersian("23:30")}</span>
                <StudyTimeIcon color={theme.colors.black} />
              </StyledStudyTime>
            </StyledSubjectBox>
          </StyledSubject>
        </SwiperSlide>
      </Swiper>
    </StyledSubjects>
  );
};
