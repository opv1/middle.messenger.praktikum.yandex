import withStore from './withStore';

import { IState } from 'src/store';

export const withActiveChat = withStore((state: IState) => ({ ...state.activeChat }));
