export function shareLink(length: number) {
  const options = "sdkjcn45156sdkjn";
  const genL = options.length;
  let ans = "";
  for (let i = 0; i < length; i++) {
    ans += options[Math.floor(Math.random() * genL)];
  }
  return ans;
}
