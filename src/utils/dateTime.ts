/** 日本時間取得 */
export function nowJp() {
  return new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
}

/** データを送信する場合の現在時刻 (YYYYMMDDhhmm) */
export function createAtTimeMin() {
  const now = nowJp();
  const year = now.getFullYear().toString();
  const month = padding0(now.getMonth() + 1);
  const date = padding0(now.getDate());
  const hour = padding0(now.getHours());
  const minute = padding0(now.getMinutes());
  return `${year}${month}${date}${hour}${minute}`;
}

/** データを送信する場合の現在時刻 (YYYYMMDDhhmm) */
export function createAtTimeSec() {
  const now = nowJp();
  const year = now.getFullYear().toString();
  const month = padding0(now.getMonth() + 1);
  const date = padding0(now.getDate());
  const hour = padding0(now.getHours());
  const minute = padding0(now.getMinutes());
  const sec = padding0(now.getSeconds());
  return `${year}${month}${date}${hour}${minute}${sec}`;
}

/** 画面に表示する場合の現在時刻 (YYYY/MM/DD hh:mm:ss) */
export function createNowUpdateTime() {
  const now = nowJp();
  const year = now.getFullYear().toString();
  const month = padding0(now.getMonth() + 1);
  const date = padding0(now.getDate());
  const hour = padding0(now.getHours());
  const minute = padding0(now.getMinutes());
  const sec = padding0(now.getSeconds());
  return `${year}/${month}/${date} ${hour}:${minute}:${sec}`;
}

function padding0(num: number) {
  if (num < 10) return `0${num}`;
  return num.toString();
}
