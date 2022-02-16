<template>
  <div class="page-wrapper">
    <div class="columns">
      <div class="container profile">
        <div class="section profile-heading">
          <div class="columns is-mobile is-multiline">
            <div class="column is-2">
              <figure class="image  header-icon user-profile-image">
                <img
                  class="is-rounded"
                  :src="user?.avatar"/>
              </figure>
            </div>
            <div class="column is-4-tablet is-10-mobile name">
              <div class="user-info">
                <p>
                  <span class="title is-bold">{{user?.username}}</span>
                  <br/>
                </p>
                <p class="tagline">
                  {{user?.info}}
                </p>
              </div>
              <profile-modal
                v-if="user"
                :user="user"
              />
            </div>
            <div
              @click="selectedOpportunities = 'received'"
              :class="{'is-active': selectedOpportunities === 'received'}"
              class="stats-tab stats-tab-interactive column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">Received</p>
              <p class="stat-key">{{opportunities.length}} Opportunities</p>
            </div>
            <div
              @click="selectedOpportunities = 'sent'"
              :class="{'is-active': selectedOpportunities === 'sent'}"
              class="stats-tab stats-tab-interactive column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">Sent</p>
              <p class="stat-key">{{sendOpportunities.length}} Opportunities</p>
            </div>
            <div class="stats-tab column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">{{user?.credit}}</p>
              <p class="stat-key">Credits</p>
            </div>
          </div>
        </div>
        <div
          v-if="selectedOpportunities === 'received'"
          class="columns is-mobile is-multiline">
          <template v-if="opportunities && opportunities.length > 0">
            <div
              v-for="opportunity in opportunities"
              :key="opportunity.id"
              class="column is-3-tablet is-6-mobile">
              <div class="card">
                <div v-if="opportunity.fromExchange" class="card-image">
                  <figure class="image is-4by3">
                    <img :src="opportunity.fromExchange.image"/>
                  </figure>
                </div>
                <div v-else class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=40"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p v-if="opportunity.fromExchange" class="title is-6">
                        <b>Offer:</b> {{opportunity.fromExchange.title}}
                      </p>
                      <p v-else class="title is-6">
                        <b>Offer:</b> {{opportunity.price}}$
                      </p>

                      <p class="title is-6"><b>Request:</b> {{opportunity.title}}</p>
                      <p class="subtitle is-6">
                        <span
                          :class="[
                            {'is-success': opportunity.status === 'accepted'},
                            {'is-danger': opportunity.status === 'declined'},
                            {'is-warning': opportunity.status === 'pending'}
                          ]"
                          class="tag is-dark subtitle">{{opportunity.status}}</span>
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <p v-if="opportunity.fromExchange">
                      {{opportunity.fromExchange.description}}
                    </p>
                    <p v-else>
                      User want to exchange your item for money
                    </p>
                  </div>
                </div>
                <footer class="card-footer">
                  <opportunity-deal-modal
                    v-if="opportunity.status === 'pending'"
                    :opportunity="opportunity"
                  />
                  <opportunity-result-modal
                    v-else
                    :opportunity="opportunity"
                  />
                </footer>
              </div>
              <br/>
            </div>
          </template>
        </div>
        <!-- SENT OPPORTUNITIES -->
        <div
          v-if="selectedOpportunities === 'sent'"
          class="columns is-mobile is-multiline">
          <template v-if="sendOpportunities && sendOpportunities.length > 0">
            <div
              v-for="sendOpportunity in sendOpportunities"
              :key="sendOpportunity.id"
              class="column is-3-tablet is-6-mobile">
              <div class="card">
                <div v-if="sendOpportunity.toExchange" class="card-image">
                  <figure class="image is-4by3">
                    <img :src="sendOpportunity.toExchange.image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6"><b>Request:</b> {{sendOpportunity.title}}</p>
                      <p v-if="sendOpportunity.fromExchange" class="title is-6">
                        <b>Offer:</b> {{sendOpportunity.fromExchange.title}}
                      </p>
                      <p v-else class="title is-6">
                        <b>Offer:</b> {{sendOpportunity.price}}$
                      </p>
                      <p class="subtitle is-6">
                        <span
                          :class="[
                            {'is-success': sendOpportunity.status === 'accepted'},
                            {'is-danger': sendOpportunity.status === 'declined'},
                            {'is-warning': sendOpportunity.status === 'pending'}
                          ]"
                          class="tag is-dark subtitle">{{sendOpportunity.status}}</span>
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <p v-if="sendOpportunity.fromExchange">
                      {{sendOpportunity.fromExchange.description}}
                    </p>
                    <p v-else>
                      Price exchange
                    </p>
                  </div>
                </div>
              </div>
              <br/>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useAuth from '../composition/useAuth';
import ProfileModal from "../components/ProfileModal"
import OpportunityDealModal from "../components/OpportunityDealModal";
import OpportunityResultModal from "../components/OpportunityResultModal.vue";
export default {
  components: {
    ProfileModal,
    OpportunityDealModal,
    OpportunityResultModal
  },
  data() {
    return {
      selectedOpportunities: "received"
    }
  },
  setup() {
    return useAuth();
  },
  computed: {
    opportunities() {
      return this.$store.state.opportunity.opportunities
    },
    sendOpportunities() {
      return this.$store.state.opportunity.sendOpportunities
    },
  },
  watch: {
    isAuthenticated(isAuth) {
      if (!isAuth) { this.$router.push("/"); }
    }
  },
  created() {
    this.$store.dispatch("opportunity/getOpportunities");
    this.$store.dispatch("opportunity/getSendOpportunities");
  }
}
</script>

<style scoped>
  .link {
    font-weight: 500;
    color: rgb(79, 79, 172);
    text-decoration: underline;
  }
  .user-info {
    margin-bottom: 10px;
  }
  .stats-error {
    font-size: 40px;
    font-weight: bold;
    margin-top: 30px;
  }
  .delete-item {
    color: red;
  }
  .stats-tab {
    border-bottom: 2px solid transparent;
    transition: 0.5s;
  }
  .stats-tab:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }
  .stats-tab.is-active {
    border-bottom: 2px solid black;
  }
  .stat-val {
    font-size: 2em;
    padding-top: 20px;
    font-weight: bold;
  }
  .stat-key {
    font-size: 1.4em;
    font-weight: 200
  }
  .section.profile-heading .column.is-2-tablet.has-text-centered + .has-text-centered {
    border-left: 1px dotted rgba(0, 0, 0, .2);
  }
  .container.profile {
    margin-top: 1%;
  }
  .control.is-pulled-left span.select {
    margin-right: 5px;
    border-radius: 2px;
  }
  .modal-card .content h1 {
    padding: 40px 10px 10px;
    border-bottom: 1px solid #dadada
  }
  .container.profile .profile-options .tabs ul li.link a {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #F1F1F1;
  }
  .card-footer {
    justify-content: center;
    padding: 5px;
  }
</style>
