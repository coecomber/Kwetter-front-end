<template>
  <div>
    <textarea
      class="px-4 py-2 text-sm w-full h-16 placeholder-current border-2 border-black rounded-md shadow-sm outline-none resize-none focus:border-opacity-50 border-opacity-10 text-default"
      @input="handleInput"
      v-if="type === 'textarea'"
      :cols="cols"
      :rows="rows"
      v-bind:min="min"
      v-bind:max="max"
      v-bind:value="value"
      v-bind:placeholder="placeholder"
    ></textarea>

    <input
      v-else
      class="w-full px-4 py-2 text-sm placeholder-current bg-white border-2 border-black rounded-md shadow-sm outline-none  focus:border-opacity-50 border-opacity-10 text-default"
      :class="getInputClass()"
      @input="handleInput"
      v-bind:placeholder="placeholder"
      v-bind:value="value"
      v-bind:type="type"
      v-bind:min="min"
      v-bind:max="max"
    />
    <span
      v-if="icon"
      class="absolute mt-2 text-sm input-icon"
      :class="getInputIconClass()"
    ></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'v-input',
})
export default class VInput extends Vue {
  handleInput($event: any) {
    this.$emit('input', $event.target.value);
  }

  @Prop({
    type: String,
    default: '',
  })
  private icon?: string;

  @Prop({
    type: String,
    default: 'left',
  })
  private iconPosition?: 'left' | 'right';

  // Isn't there an easier way than entering the props by hand?
  @Prop({
    type: String,
    default: '',
  })
  private placeholder?: string;

  @Prop({
    type: String,
    default: '',
  })
  private value?: string;

  @Prop({
    type: String,
    default: 'text',
  })
  private type?: string;

  @Prop({
    type: String,
    default: '0',
  })
  private min?: number;

  @Prop({
    type: String,
  })
  private max?: number;

  @Prop({
    type: String,
    default: '10',
  })
  private rows?: number;

  @Prop({
    type: String,
    default: '100',
  })
  private cols?: number;

  mounted() {
    if (this.icon) {
      this.$el.querySelector('.input-icon')!.innerHTML = this.icon as string;
    }
  }

  getInputClass(): string {
    const classList: string[] = [];

    if (this.icon) {
      switch (this.iconPosition) {
        case 'left':
          classList.push('pl-10');
          break;
        case 'right':
          classList.push('pr-10');
          break;
      }
    }

    return classList.join(' ');
  }

  getInputIconClass(): string {
    switch (this.iconPosition) {
      case 'left':
        return 'left-3';
      case 'right':
        return 'right-3';
    }

    return '';
  }
}
</script>
