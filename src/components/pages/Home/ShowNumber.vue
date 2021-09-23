<template>
  <div id="app-show-number">
      {{ num }}
      {{ dblNum }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'AppShowNumber',
  computed:{
    ...mapState({
      num:state => state.commons.num
    }),
    ...mapGetters({
        dblNum:'doubleNumber'
    })
  }
}
</script>

<style>

</style>