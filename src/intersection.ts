export {};

type Pitcher1 = {
  thorwingSpped: number;

}

type Batter1 = {
  battingAverage: number;
}

const DimajinSasaki: Pitcher1 = {
  thorwingSpped: 154
}

const OchiaiHiromitsh: Batter1 = {
  battingAverage: 0.367
}

// // 新しいType
// type TwoWayPlayer = {
//   thorwingSpped: number;
//   battingAverage: number;
// }

// もっとスマートに intersection型
type TwoWayPlayer = Pitcher1 & Batter1;
const OtaniShouhei: TwoWayPlayer = {
  thorwingSpped: 165,
  battingAverage: 0.286
}