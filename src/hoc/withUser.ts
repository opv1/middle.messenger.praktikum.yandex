import withStore from './withStore';

import { IState } from 'src/store';

export const withUser = withStore((state: IState) => ({ ...state.currentUser }));
