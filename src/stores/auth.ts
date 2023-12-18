import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  //Data
  const isAuth = ref(false)
  //Computed

  //Actions

  return { isAuth }
})
