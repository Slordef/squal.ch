<template>
  <div class="login-container">
    <form
      class="form-container"
      @submit.prevent="login"
    >
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          class="form-control"
          placeholder="Email"
          type="email"
        >
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input
          id="password"
          v-model="password"
          class="form-control"
          placeholder="Mot de passe"
          type="password"
        >
      </div>
      <div class="form-group">
        <button
          class="btn-submit"
          type="submit"
        >
          Se connecter
        </button>
      </div>
      <div
        v-if="status.length > 0"
        class="form-group"
      >
        <div
          class="alert alert-danger"
          role="alert"
        >
          {{ status }}
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
onBeforeMount(() => {
	store.dispatch('isConnected').then(isConnected => {
		if (isConnected) {
			router.push('/admin/dashboard');
		}
	});
});

const email = ref('');
const password = ref('');
const status = ref('');

const login = () => {
	store.dispatch('login', { email: email.value, password: password.value }).then(success => {
		if (!success) {
			status.value = 'Identifiants incorrects';
			return;
		}
		router.push('/admin/dashboard');
	});
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
}

.alert-danger {
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #f00;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  color: #880000;
}
</style>