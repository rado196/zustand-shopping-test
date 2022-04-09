/// <reference types="react-scripts" />

declare type Nullable<T> = T | null;
declare type PropsType<T = {}> = T & {
  children?: any;
};
