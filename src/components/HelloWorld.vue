<template>
  <div>
    <v-parallax src="shelf.jpg" height="600">
      <v-layout style="margin-top:100px" align-left column justify-center>
        <h1 :class="$vuetify.breakpoint.xs ? 'display-3' : 'display-4'">
          The
          <i>
            <b>GAEL</b><b>BACH</b>
          </i>
        </h1>
        <div style="margin:5px">
          <v-btn href="TheGaelbach_Flyer.pdf" target="_blank">Unser Angebot</v-btn>
        </div>
        <div style="margin:5px">
          <v-btn href="geplanteEvents_rev.01.pdf" target="_blank">Geplante Events</v-btn><br>
        </div>
        <div style="margin:5px">
          <v-btn href="260424_VoAn_GenTre.rev00.pdf" target="_blank">Public Tasting</v-btn>
        </div>
        <div style="margin:5px">
          <v-btn href="mailto:thegaelbach@gmail.com" target="_blank">Kontakt aufnehmen</v-btn>
        </div>
      </v-layout>
    </v-parallax>
    
    <v-layout row wrap style="background-color: #EBD2AD">
      
      <v-flex xs12>
        <!--embed src="TheGaelbach_Flyer.pdf" width="100%" height="100%" /-->
        <!--v-img width="20%" src="logo.png" /-->
        <div class="display-3" style="color:black; margin:20px" align="center"
          justify="center">Tasting - Auswahl</div>
        <!--router-link :to="{path:'/signup'}">BLA</router-link-->
        <v-carousel :cycle="true" hide-delimiters height="250" style="margin-bottom:20px">
    <v-carousel-item two-line v-for="item in contents" :key="item.title">
      <v-sheet height="100%" >
            <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
              <div> <v-sheet :class="$vuetify.breakpoint.xs ? 'body' : 'headline'">{{item.title}}</v-sheet>
              <v-sheet :class="$vuetify.breakpoint.xs ? 'subtitle-2' : 'subtitle-1'" v-for="cont in item.items" :key="cont">{{cont}}</v-sheet>
              </div>
            </v-row>
      </v-sheet>
    </v-carousel-item>
          <!--v-timeline-item v-for="item in contents" :key="item.title" color="black lighten-2" large>
            <template v-slot:opposite>
              <span></span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{item.title}}</v-card-title>
              <v-card-text>
                <ul>
                  <li v-for="cont in item.items" :key="cont">{{cont}}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline-->
        </v-carousel>
      </v-flex>
      
    </v-layout>
    <v-parallax src="shelf.jpg" height="300">
      <v-layout align-left column justify-center></v-layout>
    </v-parallax>
  </div>
</template>

<script>
import { getMessage } from "../api";
export default {
  data: () => ({
    contents: [
      {
        title: "Schottland – Rundreise alle Whisky-Regionen",
        items: []
      },
      {
        title: "Schottlands Whisky-Regionen im Detail",
        items: ["Lowlands", "Highlands", "Speyside", "Campbeltown", "Islay"]
      },
      {
        title: "Distillery Specials – Single Malt Klassiker",
        items: [
          "Ardbeg",
          "Auchentoshan",
          "Glenfiddich",
          "Glenmorangie",
          "Highland Park",
          "Macallan",
          "… Nach Wahl"
        ]
      },
      {
        title: "Gordon & Macphail exclusiv",
        items: ["Discovery", "Distillery Labels", "Connoisseurs Choice"]
      },
      { title: "Flora und Fauna Serie", items: [] },
      {
        title: "Blended Scotch",
        items: ["Johnnie Walker Labels", "Berühmte Marken"]
      },
      {
        title: "Das Holz",
        items: [
          "Einfluss Der Ersten Füllung",
          "Fass-Finish",
          "Fass-Stärke",
          "Einzelfassabfüllungen"
        ]
      },
      {
        title: "Das ‚richtige‘ Alter",
        items: [
          "Youngster, Early Teens",
          "12 bis 18 Jahre",
          "Reife länger 18 Jahre"
        ]
      },
      { title: "NAS-Whiskys", items: [] },
      {
        title: "nach persönlichem Wunsch",
        items: [
          "Vielfalt ohne Grenzen",
          "Individuelle Auswahl",
          " Spezielle Themen"
        ]
      }
    ]
  }),
  created() {
    //getMessage();
  }
};
</script>

<style>
</style>
