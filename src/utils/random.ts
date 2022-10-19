export function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// /**
//  * SV初期データ
//  * @param sv
//  * @returns
//  */
// export function getRandomSV(sv: SV[]): SV[] {
//   return sv.map((_, i) => ({ word: i, position: 255, data: getRandom(0, 1) }));
// }

// /**
//  * TM初期データ
//  * @param tm
//  * @returns
//  */
// export function getRandomTM(tm: TM[], min: number, max: number): TM[] {
//   return tm.map((_, i) => ({
//     word: i,
//     chgVal: 0,
//     chgacc: 0,
//     data: getRandom(min, max),
//   }));
// }
