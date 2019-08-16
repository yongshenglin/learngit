let defaultUser = ''
try {
  if (localStorage.username) {
    defaultUser = localStorage.username
  }
} catch (e) { }

const state = {
  username: defaultUser,
  password: '',
  phoneNum: '',
  email: ''
}

export default state
