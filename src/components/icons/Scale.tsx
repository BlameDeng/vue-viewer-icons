import { defineComponent, SVGAttributes } from "vue";

  export const SvgScale = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 1h-12v7h-4v7h8v-4h8zm-9 13h-6v-5h3v2h3zm8-4h-10v-8h10z"/></svg>;
    },
  });