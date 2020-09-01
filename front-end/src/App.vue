<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <v-container>
        <v-row align="center">
          <v-col>
            <div class="text-h3">{{ currentTime }}</div>
          </v-col>
          <v-col style="text-align:right;">
            <div class="text-h3">IS Department,Amtec</div>
          </v-col>
          <!-- <v-col style="text-align:right;">
            <div class="text-h3"></div>
          </v-col> -->
        </v-row>
      </v-container>
    </v-app-bar>
    <!-- 
    <v-main class="bg">
      <v-container fill-height>
        <v-card style="width:100%">
          <v-card-text style="height:100%;">
            <v-row align="center" justify="center" class="pa-5">
              <v-col>
                <div class="text-h3 ma-5">
                  Name : <span style="color:black;">Nuttasak Munhadee</span>
                </div>
                <div class="text-h3 ma-5">
                  ID : <span style="color:black;">1540-001412</span>
                </div>
                <div class="text-h3 ma-5">
                  Company : <span style="color:black;">Repco</span>
                </div>
                <div class="text-h3 ma-5">Competency</div>
                <div style="color:black;">
                  <div class="text-h3 ma-5" style="padding-left:24px;">
                    <v-icon left x-large color="green">mdi-check</v-icon
                    >Programming
                  </div>
                  <div class="text-h3 ma-5" style="padding-left:24px;">
                    <v-icon left x-large color="red">mdi-close</v-icon
                    >Electronic
                  </div>
                  <div class="text-h3 ma-5" style="padding-left:24px;">
                    <v-icon left x-large color="red">mdi-close</v-icon>Mechanic
                  </div>
                </div>
              </v-col>
              <v-col>
                <div>
                  <img
                    src="./assets/person.jpg"
                    alt=""
                    style="width:75%;height:100%;margin: 0 auto;
     display: block; "
                  />
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main> -->

    <!-- <v-card>
              <v-card-text style="height:100%;"> -->

    <v-main>
      <v-container fill-height>
        <v-row align="center" justify="center" v-if="idleFlg">
          <v-col cols="7">
            <div style="height:100%;">
              <div class="detail-box-shadow">
                <v-row class="ma-5">
                  <v-col cols="3">
                    <div class="text-h3">
                      Name
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <div class="text-h3" v-if="objWorker != null">
                      {{ objWorker.name }}
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <div class="text-h3">
                      ID
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <div class="text-h3" v-if="objWorker != null">
                      {{ objWorker.id }}
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <div class="text-h3">
                      Company
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <div class="text-h3" v-if="objWorker != null">
                      {{ objWorker.companyName }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <br />
              <div class="text-h3 ma-5">Competency</div>
              <div class="detail-box-shadow" style="height:230px">
                <div style="color:black;" v-if="objWorker != null">
                  <div class="text-h3 ma-5" style="padding-left:24px;">
                    <v-icon
                      v-if="objWorker.programming == 1"
                      left
                      x-large
                      color="green"
                      >mdi-check</v-icon
                    >
                    <v-icon v-else left x-large color="red">mdi-close</v-icon>
                    Programming
                  </div>
                  <div class="text-h3 ma-5" style="padding-left:24px;">
                    <v-icon
                      v-if="objWorker.electronic == 1"
                      left
                      x-large
                      color="green"
                      >mdi-check</v-icon
                    >
                    <v-icon v-else left x-large color="red">mdi-close</v-icon>
                    Electronic
                  </div>
                  <div class="text-h3 ma-5" style="padding-left:24px;">
                    <v-icon
                      v-if="objWorker.mechanic == 1"
                      left
                      x-large
                      color="green"
                      >mdi-check</v-icon
                    >
                    <v-icon v-else left x-large color="red">mdi-close</v-icon>
                    Mechanic
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="5">
            <div v-if="objWorker != null">
              <img
                :src="'http://localhost:3000/' + objWorker.img"
                alt=""
                style="width:75%;height:100%;margin: 0 auto;display: block; "
              />
            </div>
          </v-col>
        </v-row>
        <v-card style="min-height:80%;max-height:80%; width:100%" v-else>
          <v-card-title>
            <div class="text-h3">
              Current Employee
            </div>
          </v-card-title>

          <v-card-text style="overflow-y:auto;text-align:center">
            <div style="  display: flex;  justify-content: center;  ">
              <table id="table-current-emp">
                <tr>
                  <th class="text-h4 text-left" style="width:200px;">ID</th>
                  <th class="text-h4  text-left">Name</th>
                  <th class="text-h4 text-left">Company</th>
                  <th class="text-h4 text-left" style="width:240px;">
                    Time In
                  </th>
                </tr>
                <tr v-for="e in currentEmployee" :key="e.id">
                  <td class="text-h5 text-left">{{ e.id }}</td>
                  <td class="text-h5 text-left">{{ e.name }}</td>
                  <td class="text-h5 text-left">{{ e.companyName }}</td>
                  <td class="text-h5 text-center">{{ e.timestamp_in }}</td>
                </tr>
              </table>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
    <v-footer app color="white">
      <v-spacer></v-spacer>
      <img src="./assets/scg-logo.png" alt="" style="height:75px;" />
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Moment from 'moment';

export default {
  name: 'App',
  data: () => ({
    currentTime: Moment().format('YYYY-MM-DD HH:mm:ss'),
    objWorker: null,
    interval: null,
    origin: location.origin,
    idleFlg: 0,
    currentEmployee: null,
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.currentTime = Moment().format('YYYY-MM-DD HH:mm:ss');
      fetch('http://localhost:3000/api/gate/walk-in')
        .then((res) => res.json())
        .then((data) => {
          if (data.length == 0) {
            fetch('http://localhost:3000/api/current-employee')
              .then((res) => res.json())
              .then((data) => {
                this.currentEmployee = data;
                this.idleFlg = false;
                this.objWorker = null;
              });
            console.log('none');

          } else {
            console.log('got 1');
            this.objWorker = data[0];
            this.idleFlg = true;
          }
        });
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
<style>
.detail-box-shadow {
  border: thin solid rgba(0, 0, 0, 0.12);
  margin: 2px;
}

#table-current-emp {
  border-collapse: collapse;
  width: 85%;
}
#table-current-emp td,#table-current-emp  th {
  padding: 8px;

}

#table-current-emp tr:nth-child(1) {
  border-bottom: 1px solid black;
}
</style>
