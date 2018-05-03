<template>
	<div class="sign-up">
		<p>Let's create a new account!</p>
		<input type="text" placeholder="Name" v-model="name"/><br><br>
		<input type="email" placeholder="Email" v-model="user"/><br><br>
		<input type="password" placeholder="Password" v-model="pass"/><br><br>
		<button @click="submitNewUser()">Sign Up</button>
		<span>or go back to <router-link to="/login">login</router-link>.</span>
	</div>
</template>

<script>
	import {usersRef} from '../firebase';
	export default{
		name: 'signUp',
		data: function(){
			return{
				name: ''
			}
		},
		firebase:{
    users:usersRef
  },
  methods:{
    submitNewUser(){
      usersRef.push({name:this.name, user:this.user, pass:this.pass, edit:false})
      this.name = ''
      this.user = ''
      this.pass = ''
    },
    removeUser(key){
      usersRef.child(key).remove();
    }
  }
	}
</script>

<style scoped>
	.signUp{
		margin-top: 40px;
	}
	input{
		margin: 10px 0;
		width: 20%;
		padding: 15px;
	}
	button{
		margin-top: 10px;
		width: 10%;
		cursor: pointer;
	}
	span{
		display: block;
		margin-top: 20px;
		font-size: 11px;
	}
</style>