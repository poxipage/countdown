import { state, type State } from "poxi";

type Schema = { countdown: number };
export const getState = () => state<Schema>();
export const getCountdown = () => getState().get("countdown");

export function onCreate(state: State<Schema>) {
  state.set({
    countdown: new Date().getTime() + 999999,
  });
}
