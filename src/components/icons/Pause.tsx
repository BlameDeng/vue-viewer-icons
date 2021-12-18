import { defineComponent, SVGAttributes } from "vue";

  export const SvgPause = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 13h-3v-10h3zm4-10h-3v10h3z" /></svg>;
    },
  });