export function ConvertEnToFaNumbers(num) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(num)
    .split("")
    .map((digit) => persianNumbers[digit])
    .join("");
}
