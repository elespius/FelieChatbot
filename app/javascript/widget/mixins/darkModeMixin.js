import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ darkMode: 'appConfig/darkMode' }),
  },
  methods: {
    $d(light, dark) {
      if (this.darkMode === 'light') {
        return light;
      }
      if (this.darkMode === 'dark') {
        return dark;
      }
      return light + ' ' + dark;
    },
  },
};
