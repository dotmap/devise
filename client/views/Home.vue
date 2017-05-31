<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Counter from 'components/Counter.vue'

@Component
export default class Home extends Vue {
  components = { Counter }
}
</script>
