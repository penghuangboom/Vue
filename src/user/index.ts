// src/api/user/index.ts

import http, { Response } from '@/utils/http/types'

export interface LoginParams {
  username: string
  password: string
}

interface UserInfo {
  id: number
  username: string
  mobile: number
  email: string
}

export default {
  async login(params: LoginParams) {
    return await http.post<Response<UserInfo>>('/user/login', params)
  }
}
