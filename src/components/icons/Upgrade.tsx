import { defineComponent, SVGAttributes } from "vue";

  export const SvgUpgrade = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m5 14v1h6v-1zm6-4h-6v1h6zm-6 3h6v-1h-6zm0-4h6v-2h3l-6-7-6 7h3z"/></svg>;
    },
  });