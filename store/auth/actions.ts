import api from '@/services/api';
import { ActionContext } from 'vuex';

import { ISignIn, IState } from './types';


const actions = {
   signIn: async (context: ActionContext<IState, any>, { email, password }: ISignIn) => 
   {
      const response = await api.post('/session', {
         email,
         password
      });
   
      const { user, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.setItem('@formvue:user', JSON.stringify(user));
      localStorage.setItem('@formvue:token', token);
      context.commit('setUser', user);
   },

   signOut: async (context: ActionContext<IState, any>) => 
   {
      localStorage.removeItem('@formvue:user');
      localStorage.removeItem('@formvue:token');
      context.commit('setUser', null);
   }
}


export default actions;
