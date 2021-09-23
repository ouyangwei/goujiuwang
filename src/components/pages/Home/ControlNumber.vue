<template>
  <div id="app-control-number">
      <button @click='INCREMENT({num:2})'>+</button>
       <button @click='asyncIncrement'>-</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'AppControlNumber',
  methods:{
      ...mapMutations([
         'INCREMENT'
      ]),
      ...mapActions([
          'asyncIncrement'
      ])
  }
}
</script>

<style>

</style>