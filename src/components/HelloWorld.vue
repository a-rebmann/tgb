<template>
  <div>
    <v-parallax src="shelf.jpg" height="1200">
      <v-layout style="margin-top:100px" align-center column justify-center>
        <h1 class="display-4">
          The
          <i>
            <b>Gaelbach</b>
          </i>
        </h1>
        <h4 class="display-2"></h4>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs1></v-flex>
        <v-flex xs10>
          <iframe src="TheGaelbach_Flyer.pdf" width="100%" height="100%" />
          <!--router-link :to="{path:'/signup'}">BLA</router-link>
        <v-timeline>
          <v-timeline-item v-for="n in 1" :key="n" color="orange lighten-2" large>
            <template v-slot:opposite>
              <span>Date of something</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">Title of something</v-card-title>
              <v-card-text>Content of something.</v-card-text>
            </v-card>
          </v-timeline-item>
          </v-timeline-->
        </v-flex>
        <v-flex xs1></v-flex>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
import { getMessage } from "../api";
export default {
  data: () => ({}),
  created() {
    //getMessage();
  }
};
</script>

<style>
</style>
