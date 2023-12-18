<script lang="ts" setup></script>

<template>
  <section class="auth_container">
    <section class="auth_auth"></section>
    <aside class="auth_image">
      <img class="coub1" src="@/components/icons/coub1.svg" alt="" />
      <img class="coub2" src="@/components/icons/coub2.svg" alt="" />
      <img class="coub3" src="@/components/icons/coub3.svg" alt="" />
      <img class="coub4" src="@/components/icons/coub4.svg" alt="" />
      <img class="coub5" src="@/components/icons/coub5.svg" alt="" />
      <img class="coub6" src="@/components/icons/coub6.svg" alt="" />
    </aside>
  </section>
</template>

<style scoped>
.auth_container {
  display: flex;
  height: 100vh;
  height: 100svh;
}

.auth_auth {
  background: gray;
  width: 40%;
}

.auth_image {
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
  width: 24%;
  height: 24%;
}

.coub2 {
  position: absolute;
  left: 71%;
  top: 10%;
  width: 20%;
  height: 20%;
}

.coub3 {
  position: absolute;
  left: 10%;
  top: 22%;
  width: 70%;
  height: 70%;
}

.coub4 {
  position: absolute;
  left: 80%;
  top: 64%;
  width: 12%;
  height: 12%;
}
.coub5 {
  position: absolute;
  right: 81%;
  top: 71%;
  width: 32%;
  height: 32%;
}

.coub6 {
  position: absolute;
  left: 69%;
  top: 74%;
  width: 30%;
  height: 30%;
}
</style>
