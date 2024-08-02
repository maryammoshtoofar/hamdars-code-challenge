import {
  StyledProgressCircle as ProgressCircle,
  StyledCircularSVG as SVG,
  StyledCircleBG as CircleBG,
  StyledCircle as Circle,
} from "src/ui/base";
import { calcChapterProgress } from "src/utils";

export const CircularProgress = ({ progress, children }) => {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  return (
    <ProgressCircle>
      <SVG viewBox="0 0 36 36">
        <CircleBG cx="18" cy="18" r={radius} />
        <Circle
          cx="18"
          cy="18"
          r={radius}
          progress={progress}
          circumference={circumference}
        />
      </SVG>
      {children}
    </ProgressCircle>
  );
};
