export const USER_LOGIN = 'USER_LOGIN'

export const userLoginAction = (password) => {
    return {
      type: USER_LOGIN,
      payload: password,
    }
  }