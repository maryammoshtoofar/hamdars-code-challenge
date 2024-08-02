export function ConvertToPersianNumbers(num) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(num)
    .split("")
    .map((digit) => persianNumbers[digit])
    .join("");
}

export function studyTimeInPersian(studyTime) {
  const numbers = studyTime.split(":");
  return numbers.map((number) => ConvertToPersianNumbers(number)).join(":");
}

export function calcChapterProgress(progress) {
  const clippings = [];
  if (progress === 0) {
    return clippings;
  }

  if ((progress < 20) | (progress > 100)) {
    throw Error("Progress must be 0, 20 , 40 , 60 , 80 or 100");
  }
  let rectPositions = {
    20: { x: "29", y: "10", width: "8", height: "20" },
    40: { x: "10", y: "28", width: "19", height: "10" },
    60: { x: "-1", y: "15", width: "11", height: "20" },
    80: { x: "1", y: "-5", width: "14", height: "20" },
    100: { x: "15", y: "-5", width: "18", height: "16" },
  };

  for (let rect in rectPositions) {
    if (progress >= rect) {
      clippings.push(rectPositions[rect]);
    }
  }
  return clippings;
}

export function formatStudyTime(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins - hours * 60;
  let formattedHours = hours < 10 ? `0${hours}` : hours;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
}

export function calcUnitProgress(current, max, min) {
  let progress = Math.ceil((1 - current / (max - min)) * 100);
  return progress;
}
