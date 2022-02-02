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
                  src="http://via.placeholder.com/100x100"/>
              </figure>
            </div>
            <div class="column is-4-tablet is-10-mobile name">
              <div class="user-info">
                <p>
                  <span class="title is-bold">John Doe</span>
                  <br/>
                </p>
                <p class="tagline">
                  Very short user info
                </p>
              </div>
              <button class="button is-success">Update Info</button>
            </div>
            <div
              class="stats-tab stats-tab-interactive column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">Received</p>
              <p class="stat-key">Opportunities</p>
            </div>
            <div
              class="stats-tab stats-tab-interactive column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">Sent</p>
              <p class="stat-key">Opportunities</p>
            </div>
            <div class="stats-tab column is-2-tablet is-4-mobile has-text-centered">
              <p class="stat-val">1000</p>
              <p class="stat-key">Credits</p>
            </div>
          </div>
        </div>
        <div
          class="columns is-mobile is-multiline">
          <template v-if="true">
            <div
              class="column is-3-tablet is-6-mobile">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="http://via.placeholder.com/400x400"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6 mb-2">
                        <b>Offer:</b> 1000$
                      </p>
                      <p class="title is-6"><b>Request:</b> Programming Lessons</p>
                      <p class="subtitle is-6">
                        <span
                          class="tag is-dark subtitle">Pending</span>
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <p>
                      User wants to exchange your item thorugh money exchange
                    </p>
                  </div>
                </div>
                <footer class="card-footer">
                  <button
                    type="button"
                    class="button is-block is-success is-light is-fullwidth"
                  >
                    Check deal
                  </button>
                </footer>
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
export default {
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
