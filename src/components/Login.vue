<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 style="opacity: 65%">Be in touch. Anytime. Anywhere.</h2>

    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
