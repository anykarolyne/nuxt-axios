<template>
  <div>

    <form class="pa3 pa5-ns" @submit.prevent="add({from, to, datefrom, dateto, price})">
      <input v-model="from" type="text">
      <input v-model="to" type="text">
      <input v-model="datefrom" type="text">
      <input v-model="dateto" type="text">
      <input v-model="price" type="number">
      <input type="submit" value="Add">
    </form>

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">travels</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="travel of travels" class="flex items-center ph3 pv3 bb b--light-silver">
          <span v-bind:class="{strike: travel.complete}" class="flex-auto">{{travel.id}}. {{travel.from}} - {{travel.to}} </span>
          <button @click="toggle(travel)"><img src="https://icon.now.sh/check" alt=""></button>
          <button @click="remove(travel)"><img src="https://icon.now.sh/trash" alt=""></button>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import {init} from './shared'

export default {

  fetch:init,

  data(){
    return{
      from: "Torino",
      to: "Nova York",
      datefrom: "19/11/2017",
      dateto: "19/12/2017",
      price: 2222
    }
  },

  computed:{
    ...mapState({
      travels: state => state.travels
    })
  },

  methods:{
    ...mapActions([
      'add',
      'remove',
      'toggle'
    ])
  }
}
</script>
