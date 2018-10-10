export default {
  LOGOUT_SUCCESS(state, payload) {
    state.isLoginOut = !state.isLoginOut
    this.state.Login.isLogin = false
  }
}
