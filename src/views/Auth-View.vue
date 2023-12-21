<script setup lang="ts">
import FormComponent from '@/components/Form-Component.vue'
</script>

<template>
  <section class="auth_container">
    <section class="auth_form">
      <section class="auth_reg_container">
        <img class="auth_logo" src="@/components/icons/logo.svg" alt="Томский политех" />
        <h1 class="auth_header">Авторизация</h1>
        <FormComponent></FormComponent>
        <section class="auth_info_container">
          <p class="info">
            Если возникла проблема, то можете
            <br />
            <span>написать</span>
            <span style="color: #3ea748; text-decoration: underline"> Алёне из <b>Сибтехa</b></span>
          </p>
          <span class="info">
            С любовью, ваш <b style="color: #3ea748; text-decoration: underline">Сибтех</b>
          </span>
        </section>
      </section>
    </section>
    <aside class="auth_decoration">
      <img
        class="coub1"
        src="@/components/icons/coub1.svg"
        alt="Image of a green glass coubes of different sizes"
      />
      <img
        class="coub2"
        src="@/components/icons/coub2.svg"
        alt="Image of a green glass coubes of different sizes"
      />
      <img
        class="coub3"
        src="@/components/icons/coub3.svg"
        alt="Image of a green glass coubes of different sizes"
      />
      <img
        class="coub4"
        src="@/components/icons/coub4.svg"
        alt="Image of a green glass coubes of different sizes"
      />
      <img
        class="coub5"
        src="@/components/icons/coub5.svg"
        alt="Image of a green glass coubes of different sizes"
      />
      <img
        class="coub6"
        src="@/components/icons/coub6.svg"
        alt="Image of a green glass coubes of different sizes"
      />
    </aside>
  </section>
</template>

<style scoped>
.auth_container {
  display: flex;
  height: 100vh;
  height: 100svh;
}

.auth_form {
  background: white;
  width: max(40%, 800px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.auth_reg_container {
  width: 74%;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20%;
  padding-bottom: 0%;
}

.auth_logo {
  align-self: self-start;
  width: clamp(6.25rem, 5.3804rem + 4.3478vw, 8.75rem);
  height: clamp(1.875rem, 1.5489rem + 1.6304vw, 2.8125rem);
  margin-top: 15%;
}

.auth_header {
  color: #000;
  font-family: 'Cera PRO Medium';
  font-size: clamp(2.125rem, 1.9511rem + 0.8696vw, 2.625rem);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.auth_info_container {
  padding-top: 50%;
  margin-bottom: 10%;
}

.info {
  font-family: 'Cera PRO Medium';
  color: #676767;
  font-size: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  font-style: normal;
  font-weight: 100;
  line-height: 24px; /* 150% */
  letter-spacing: -0.64px;
  opacity: 0.7;
}

.auth_decoration {
  background: rgba(62, 167, 72, 1);
  width: 60%;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
}

.coub1 {
  position: absolute;
  left: 6%;
  top: 4%;
  width: 26%;
  height: 26%;
}

.coub2 {
  position: absolute;
  left: 67%;
  top: 8%;
  width: 23%;
  height: 23%;
}

.coub3 {
  position: absolute;
  left: 6%;
  top: 20%;
  width: 72%;
  height: 72%;
}

.coub4 {
  position: absolute;
  left: 76%;
  top: 66%;
  width: 12%;
  height: 12%;
}

.coub5 {
  position: absolute;
  right: 78%;
  top: 66%;
  width: 37%;
  height: 37%;
}

.coub6 {
  position: absolute;
  left: 66%;
  top: 72%;
  width: 30%;
  height: 30%;
}

@media (max-width: 830px) {
  .auth_container {
    overflow: auto;
  }
  .auth_form {
    overflow: auto;
  }
  .auth_decoration {
    display: none;
  }
  .auth_reg_container {
    padding-left: 0%;
    padding-bottom: 0%;
    align-items: center;
  }
  .auth_header,
  .auth_logo {
    margin-top: 5%;
    margin-bottom: 2%;
    align-self: center;
  }
  .auth_info_container {
    padding-top: 2%;
    text-align: center;
    margin-bottom: 0%;
  }
}
</style>
