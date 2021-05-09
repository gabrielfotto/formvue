import { MutationTree } from 'vuex';


export interface IUser {
   id: string;
   name: string;
   email: string;
}

// State
export interface IState {
   user: IUser | null;
}

// Actions
export interface ISignIn {
   email: string;
   password: string;
}

// Getters
export interface IGetters {
   getUser: (state: IState) => IUser | null;
}

// Mutation
export type RootState = ReturnType<() => IState>;

export interface IMutations extends MutationTree<RootState> {
   setUser: (state: IState, user: IUser) => void;
}
