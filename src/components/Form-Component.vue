<script setup lang="ts"></script>

<template>
  <form class="form_form">
    <input class="from_login" placeholder="Логин" type="text" />
    <input class="form_pass" placeholder="Пароль" type="text" />
    <button class="form_btn">Вход</button>
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

@media (max-width: 830px) {
  .form_btn {
    align-self: center;
  }
}
</style>
