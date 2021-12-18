import { defineComponent, SVGAttributes } from "vue";

  export const SvgAway = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13.445 12.832-6.445-4.297v-7.535h2v6.465l5.555 3.703z"/></svg>;
    },
  });