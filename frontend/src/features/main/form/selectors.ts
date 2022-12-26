import { RootState } from "../../../store";
import Request from "./types/Request";

export const selectRequests = (state: RootState): Request[] => state.requests.requests
