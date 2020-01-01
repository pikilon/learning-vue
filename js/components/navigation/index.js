import { template } from "./view.js";
import { COLLECTIONS_STORE } from "../../store/collections.js";


const { mapGetters } = Vuex;

export default Vue.extend({
  template,
  computed: {
    ...mapGetters([COLLECTIONS_STORE.GETTERS.LINKS]),
  }
})