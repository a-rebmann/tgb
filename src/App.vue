<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-lowercase">
        <span></span>
        <span class="font-weight-light">the gaelbach - whisky tasting</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer app>
      <router-link :to="{path:'/impressum'}">
        <b style="margin:20px">Impressum</b>
      </router-link>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
<style>
h1,
h2 {
  color: rgb(48, 48, 48);
}
h3,
h4 {
  color: rgb(71, 71, 71);
}
b,
i,
a,
p {
  color: black;
}
</style>

