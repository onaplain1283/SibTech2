import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // Data
  const isAuth = false
  const Error = ref({
    truthness: false,
    message: ''
  })
  const Users: Ref<Map<string, string>> = ref(new Map([]))
  Users.value.set('admin', '12345')

  // Computed Data

  //Actions
  function getCookie(name: string) {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  return { isAuth, Users, Error, getCookie }
})
