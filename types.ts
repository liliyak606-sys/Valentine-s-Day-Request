export interface Position {
  top: number | string;
  left: number | string;
}

export enum GameState {
  ASKING = 'ASKING',
  SUCCESS = 'SUCCESS',
}

export interface PhraseConfig {
  text: string;
  image?: string;
  color?: string;
}