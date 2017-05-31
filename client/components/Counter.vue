<template>
  <div class="counter-wrapper">
    <div class="counter">
      {{ count }}
    </div>
    <button @click="$store.commit('INCREMENT')">Increment</button>
    <button @click="$store.commit('DECREMENT')">Decrement</button>
    <button @click="$store.dispatch('incrementAsync')">Increment Async</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { State } from 'vuex-class'
import { Component } from 'vue-property-decorator'

@Component
export default class Counter extends Vue {

  @State('count') Count: number

  created () {
    this.Count
  }

  get count (): Number {
    return this.Count
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
