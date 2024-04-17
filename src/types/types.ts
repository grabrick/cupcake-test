type TValues = {
  first?: number,
  second?: number,
  third?: number,
}

export type TPair = {
  pairName: string,
  values: TValues[]
}

export interface IPairValue {
  pairValue: TPair[] | null;
}