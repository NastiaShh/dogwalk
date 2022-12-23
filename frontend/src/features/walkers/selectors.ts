// в этом файле мы указываем функции, которые достают данные из стэйта

import { RootState } from "../../store";
import Walker from "./types/Walker";

export const selectWalkers = (state: RootState): Walker[] =>
  state.walkers.walkers
