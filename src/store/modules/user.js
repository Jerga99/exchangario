

export default {
  namespaced: true,
  actions: {
    register(_, {email, password}) {
      console.log(email);
      console.log(password);

      // Firebase functionality to register user
    }
  }
}
