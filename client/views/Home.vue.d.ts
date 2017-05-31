import Vue from 'vue';
import Counter from '../components/Counter.vue';
export default class Home extends Vue {
    components: {
        Counter: typeof Counter;
    };
}
