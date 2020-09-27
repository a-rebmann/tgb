import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.grey.lighten5, // #E53935
    secondary: colors.grey.darken4, // #FFCDD2
    accent: colors.grey.base // #3F51B5
  },
  iconfont: 'md',
})
