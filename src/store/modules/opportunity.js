
import { db } from "../../db";
import { doc, Timestamp } from "firebase/firestore";

export default {
  namespaced: true,
  actions: {
    createOpportunity(_, {opportunity, onSuccess}) {
      opportunity.createdAt = Timestamp.fromDate(new Date());

      opportunity.toExchange = doc(db, "exchanges", opportunity.toExchangeId);
      opportunity.toUser = doc(db, "users", opportunity.toUserId);
      opportunity.fromUser = doc(db, "users", opportunity.fromUserId);

      if (opportunity.fromExchangeId) {
        opportunity.fromExchange = doc(db, "exchanges", opportunity.fromExchangeId)
      }

      console.log(opportunity);

      onSuccess();
    }
  }
}
