import withStore from './withStore';

import { IState } from '@store';

export const withActiveChat = withStore((state: IState) => ({ ...state.activeChat }));
