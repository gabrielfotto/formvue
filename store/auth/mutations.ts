import { IMutations } from './types';


const mutations: IMutations = 
{
   setUser: (state, user) => {
      state.user = user;
   }
}


export default mutations;
