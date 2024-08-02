import {
  StyledProgressCircle as ProgressCircle,
  StyledCircularSVG as SVG,
  StyledCircleBG as CircleBG,
  StyledCircle as Circle,
} from "src/ui/base";
import { calcChapterProgress } from "src/utils";

export const CircularProgress = ({ progress, children }) => {
  // calculate how many segments must be shown based on progress
  // which is either 0,20,40,60 or 100
  // const progressSegments = calcChapterProgress(progress);
  return (
    <ProgressCircle>
      <SVG viewBox="0 0 36 36">
        <defs>
          {/* <clipPath id="cut-off-bottom">
            {progressSegments.map((segment, index) => (
              <rect
                key={index}
                x={segment.x}
                y={segment.y}
                width={segment.width}
                height={segment.height}
              />
            ))}
          </clipPath> */}
        </defs>
        <CircleBG
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831 
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {/* <Circle
          clipPath="url(#cut-off-bottom)"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        /> */}
      </SVG>
      {children}
    </ProgressCircle>
  );
};
