<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
//Data
const authStore = useAuthStore()

const login = ref('')
const password = ref('')

//Lifecyle Hooks
onMounted(() => {
  let login = authStore.getCookie('login')
  if (login != undefined) {
    if (authStore.Users.has(login)) {
      authStore.getCookie('password') === authStore.Users.get(login)
        ? (authStore.isAuth = true)
        : (authStore.isAuth = false)
    }
  }
})

//Actions

function tryAuth() {
  authStore.Error.truthness = false // Сброс ошибки при попытке ввести данный заново
  if (authStore.Users.has(login.value)) {
    if (authStore.Users.get(login.value) === password.value) {
      document.cookie = encodeURIComponent('login') + '=' + encodeURIComponent(login.value)
      document.cookie = encodeURIComponent('password') + '=' + encodeURIComponent(password.value)
      authStore.isAuth = true
    } else {
      authStore.Error.truthness = true
      authStore.Error.message = 'Неверный пароль.'
    }
  } else {
    authStore.Error.truthness = true
    authStore.Error.message = 'Неверный логин.'
  }
}
</script>

<template>
  <form class="form_form">
    <input v-model="login" class="from_login" placeholder="Логин" type="text" />
    <input v-model="password" class="form_pass" placeholder="Пароль" type="text" />
    <button v-on:click.prevent="tryAuth" class="form_btn">Вход</button>
    <div class="form_error_container" style="height: 30px; padding: 2%">
      <span class="form_error" v-show="authStore.Error.truthness">{{
        authStore.Error.message
      }}</span>
    </div>
  </form>
</template>

<style scoped>
.form_form {
  display: flex;
  flex-direction: column;
}

.from_login {
  width: clamp(13.4375rem, 11.3071rem + 10.6522vw, 19.5625rem);
  height: clamp(3.75rem, 3.5326rem + 1.087vw, 4.375rem);
  border-radius: 10px;
  background: rgb(234, 234, 234);
  font-family: 'Cera PRO Medium';
  color: black;
  font-size: clamp(1rem, 0.913rem + 0.4348vw, 1.25rem);
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  opacity: 0.4;
  padding-left: 8%;
}
.form_pass {
  width: clamp(13.4375rem, 11.3071rem + 10.6522vw, 19.5625rem);
  height: clamp(3.75rem, 3.5326rem + 1.087vw, 4.375rem);
  border-radius: 10px;
  margin-top: 3%;
  background: rgb(234, 234, 234);
  font-family: 'Cera PRO Medium';
  color: black;
  font-size: clamp(1rem, 0.913rem + 0.4348vw, 1.25rem);
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  opacity: 0.4;
  padding-left: 8%;
}

.form_btn {
  width: 50%;
  padding: 5.3%;
  border-radius: 10px;
  margin-top: 8%;
  background-color: #3ea748;
  color: white;
  font-family: 'Cera PRO Medium';
  font-size: clamp(0.9375rem, 0.894rem + 0.2174vw, 1.0625rem);
}
.form_error {
  color: red;
  font-family: 'Cera PRO Medium';
  font-size: clamp(0.9375rem, 0.894rem + 0.2174vw, 1.0625rem);
}
@media (max-width: 830px) {
  .form_btn {
    align-self: center;
  }
  .form_error_container {
    align-self: center;
  }
}
</style>
