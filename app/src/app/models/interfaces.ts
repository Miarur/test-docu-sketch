export interface IconItem {
  changes: Array<[]>,
  free: Array<[]>,
  label: string,
  ligatures: Array<[]>,
  search: object,
  styles: Array<[]>,
  svg: object,
  unicode: string,
  voted: boolean
}

export interface IconList {
 iconsList: IconItem[],
}


export type NonNumber<T> = T extends number ? never : T;

