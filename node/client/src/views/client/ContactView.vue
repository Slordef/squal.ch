<template>
  <section class="contact">
    <div class="title">
      <h1>Contact</h1>
    </div>
    <div class="content">
      <form
        id="formulaire"
        class="form"
        @submit.prevent="send"
      >
        <div class="form-group">
          <label
            class="label"
            for="name"
          >Nom</label>
          <input
            id="name"
            v-model="name"
            class="input"
            name="name"
            placeholder="Nom"
            type="text"
          >
        </div>
        <div class="form-group">
          <label
            class="label"
            for="email"
          >Email</label>
          <input
            id="email"
            v-model="email"
            class="input"
            name="email"
            placeholder="Email"
            type="email"
          >
        </div>
        <div class="form-group">
          <label
            class="label"
            for="text"
          >Message</label>
          <textarea
            id="text"
            v-model="message"
            class="textarea"
            cols="30"
            name="area"
            rows="10"
          />
        </div>
        <VueRecaptcha
          class="captcha"
          sitekey="6Lfu9bUUAAAAAFQcnfx6Xu3hSLGnsDzLY2bwzppc"
          @expired="onExpired"
          @verify="onVerify"
        />
        <div class="form-group">
          <input
            :disabled="sending"
            class="input"
            type="submit"
            value="Envoyer"
          >
        </div>
        <div class="contact_status">
          <transition name="fade">
            <div v-if="receive">
              <div
                v-if="success"
                class="success"
              >
                Message envoyé
              </div>
              <div
                v-else
                class="error"
              >
                {{ error }}
              </div>
            </div>
          </transition>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VueRecaptcha } from 'vue-recaptcha';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const name = ref('');
const email = ref('');
const message = ref('');
const receive = ref(false);
const success = ref(false);
const sending = ref(false);
const error = ref('');
const recaptcha = ref('');

const onVerify = (response: string) => {
	recaptcha.value = response;
};
const onExpired = () => {
	recaptcha.value = '';
};
const response = function (res: { success: boolean, error: string }) {
	success.value = res.success;
	error.value = res.error;
	receive.value = true;
	sending.value = false;
	if (success.value) {
		name.value = '';
		email.value = '';
		message.value = '';
	}
};
const send = () => {
	sending.value = true;
	const data = { name: name.value, email: email.value, message: message.value, recaptcha: recaptcha.value };
	store.dispatch('sendContactMessage', data).then(response);
};
</script>

<style scoped></style>
