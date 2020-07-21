import { Dispatch } from 'redux';
import { IGetState } from '../store/state';

export interface IAction {
  type: string;
}

export type ActionCreator = (
  dispatch: Dispatch<IAction>,
  getState: IGetState,
) => Promise<IAction | void>;
