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
  /* clip-path: path("M 0 300 L 0,75 A 5,5 0,0,1 150,75 L 100 6700 z"); */
  position: fixed;
  top: 70%;
  left: -75%;
  background-color: white;
  z-index: 2;
  background-color: pink;
  border-radius: 150%;
  width: 250%;
  height: 200%;
  overflow: hidden;
`;

export const StyledSubject = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.black};
  border-top-right-radius: 29px;
  border-top-left-radius: 29px;
  height: 12rem;
  padding-bottom: 0.5rem;
  display: flex;
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
      dfgdfg
      {/* <Swiper
        loop={true}
        modules={[EffectCreative]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        slideToClickedSlide={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          limitProgress: 30,
          prev: {
            translate: ["-110%", 50, -13],
          },
          next: {
            translate: ["110%", 50, 4],
          },
          perspective: true,
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
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 2
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 3
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 4
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 4
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 5
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 6
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 7
          </StyledSubject>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSubject>
            <CircularProgress progress={progress}>
              <Image src="icons/adabiyat.png" alt="adabiayt" />
            </CircularProgress>
            Slide 8
          </StyledSubject>
        </SwiperSlide>
      </Swiper> */}
    </StyledSubjects>
  );
};
