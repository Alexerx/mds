declare class List {
  constructor() { };

  static equal() : boolean;

  append(ele: any): void;
  find(ele: any): number;
  remove(ele: any): any;
  length(): number;
  toString(): any[];
  insert(ele: any, after: any): boolean;
  clear(): void;
  contains(): boolean;
  front(): void;
  end(): void;
  prev(): void;
  next(): void;
  currentPosition(): number;
  moveTo(position: number): void;
  getElement(): any;
}