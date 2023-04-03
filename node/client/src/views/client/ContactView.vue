<template>
  <section class="contact">
    <div class="title">
      <h1>Contact</h1>
    </div>
    <div class="content">
      <form
        v-if="false"
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
      <h2 class="text-center title-w100">
        <a
          href="mailto:pascalebernasconi@gmail.com"
        >pascalebernasconi@gmail.com</a>
      </h2>
      <h2 class="text-center title-w100">
        <a
          href="https://www.instagram.com/squal_art/"
        >
          <svg
            style="width: 30px;height: 30px;vertical-align: middle"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"
              style="fill:#2e9897"
            />
            <path
              d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"
              style="fill:#2e9897"
            />
            <circle
              cx="390.476"
              cy="121.524"
              r="30.23"
              style="fill:#2e9897"
            />
          </svg>
          squal_art
        </a>
      </h2>
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

<style lang="scss" scoped>
h2 {
  font-size: min(5vw, 2.5rem);
}
</style>
