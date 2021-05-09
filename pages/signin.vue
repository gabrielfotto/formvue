<template>
   <div class="content">
      <div class="card">
         <h2>Faça login</h2>
         <form @submit.prevent="signInRequest">
            <div>
               <input 
                  type="text" 
                  placeholder="E-mail" 
                  v-model="email"
               >
               <input 
                  type="password" 
                  placeholder="Senha" 
                  v-model="password"
               >
            </div>
            <button>Enviar</button>
         </form>
      </div>

      <br />
      <div style="text-align: left" v-if="user">
         <p>id: {{ user.id }}</p>
         <p>name: {{ user.name }}</p>
         <p>email: {{ user.email }}</p>

         <button @click="signOutRequest">Sair</button>
      </div>   
   </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';


export default {
   data: {
      email: '',
      password: ''
   },

   computed: {
      ...mapState('auth', ['user'])
   },

   methods: {
      signInRequest() {
         this.$store.dispatch('auth/signIn', 
         { 
            email: this.email, 
            password: this.password 
         });
      },

      signOutRequest() {
         this.$store.dispatch('auth/signOut');
      }
   }
}

</script>

<style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

   * {
      font-family: Poppins;
   }

   .content {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .card {
      width: 460px;
      padding: 30px;
      border-radius: 15px 4px 15px 4px;
      box-shadow: 0 4px 15px rgb(0,0,0,0.1);
   }

   .card h2 {
      font-family: Poppins;
      margin-bottom: 20px;
   }

   form {
      border-radius: 4px;
      margin: 0 auto;
   }

   form div {
      display: flex;
      flex-direction: column;
      width: 100%;
   }

   input {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #666;
      margin-bottom: 20px;
   }

   button {
      border: 0;
      outline: 0;
      border-radius: 4px;
      padding: 15px;
      background-color: #111;
      color: #fff;
      font-family: Poppins;
   }
</style>
