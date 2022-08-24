import { Dispatch, ReactNode } from "react";

import { PaletteState } from "../types";

export enum PALETTE_ACTIONS {
  SetColor = "set_color",
  ToggleLock = "toggle_lock",
  SetPalette = "set_palete",
}

export interface PalettePayloadChangeColor {
  id: number;
  colorValue: string;
}

export interface PalettePayloadToggleLock {
  id: number;
  isLocked: boolean;
}

export interface PalettePayloadSetPalette {
  palette: PaletteState;
}

export type PaletteAction =
  | {
      type: PALETTE_ACTIONS.SetColor;
      payload: PalettePayloadChangeColor;
    }
  | {
      type: PALETTE_ACTIONS.ToggleLock;
      payload: PalettePayloadToggleLock;
    }
  | {
      type: PALETTE_ACTIONS.SetPalette;
      payload: PalettePayloadSetPalette;
    };

export interface PaletteContext {
  state: PaletteState;
  dispatch: Dispatch<PaletteAction>;
}

export type ProviderChildren = { children: ReactNode };