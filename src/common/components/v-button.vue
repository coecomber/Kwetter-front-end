<template>
  <component
    @click="$emit('click')"
    :is="!to ? 'button' : 'router-link'"
    :to="to"
    class="px-3 py-4 rounded-md shadow-md"
    :class="style"
  >
    <slot />
  </component>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'v-button',
})
export default class VButton extends Vue {
  @Prop() public to: string | undefined;

  @Prop({
    type: String,
    default: 'primary',
  })
  public type?: 'primary' | 'secondary' | 'light' | 'default';

  public get style(): string {
    switch (this.type) {
      case 'primary':
        return 'bg-primary text-primary border-solid border-pink border-1';
      case 'secondary':
        return 'bg-secondary text-secondary font-bold';
      case 'light':
        return 'bg-vll-pink-light text-vll-pink-dark font-bold';
      case 'default':
        return 'bg-default text-default border-solid border-default font-bold border text-shadow-sm';
    }
    return '';
  }
}
</script>
