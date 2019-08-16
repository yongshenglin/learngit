export default {
  usernameChange (state, val) {
    state.username = val
    try {
      localStorage.username = val
    } catch (e) { }
  },
  passwordChange (state, val) {
    state.password = val
  },
  phoneNumChange (state, val) {
    state.phoneNum = val
  }
}
