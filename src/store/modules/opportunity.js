
import { db } from "../../db";
import { doc, Timestamp, addDoc, collection } from "firebase/firestore";

export default {
  namespaced: true,
  actions: {
    async createOpportunity({dispatch}, {data, onSuccess}) {
      const opportunity = {
        title: data.title,
        createdAt: Timestamp.fromDate(new Date()),
        toUser: doc(db, "users", data.toUserId),
        fromUser: doc(db, "users", data.fromUserId),
        toExchange: doc(db, "exchanges", data.toExchangeId)
      }

      if (data.fromExchangeId) {
        opportunity.fromExchange = doc(db, "exchanges", data.fromExchangeId)
      } else {
        opportunity.price = data.price
      }

      await addDoc(collection(db, "opportunities"), opportunity);
      dispatch("toast/success", "Opportunity was send!", {root: true});

      onSuccess();
    }
  }
}
