

export default {
  namespaced: true,
  actions: {
    createOpportunity(_, {opportunity, onSuccess}) {

      console.log(opportunity);
      onSuccess();
    }
  }
}
