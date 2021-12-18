import { defineComponent, SVGAttributes } from "vue";

  export const SvgFitToView = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15 1v14h-14v-14zm1-1h-16v16h16zm-10.6 2h-3.4v3.4zm8.6 3.4v-3.4h-3.4zm-3.4 8.6h3.4v-3.4zm-8.6-3.4v3.4h3.4z"/></svg>;
    },
  });