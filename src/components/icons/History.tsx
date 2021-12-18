import { defineComponent, SVGAttributes } from "vue";

  export const SvgHistory = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8.4.5a7.56434 7.56434 0 0 0 -6.6 3.8l-1.8-2.3v6h5l-2-2.5a5.99714 5.99714 0 1 1 5.4 8.6 6.13906 6.13906 0 0 1 -5.7-4.1h-1.7a7.61807 7.61807 0 1 0 7.4-9.5zm-1.4 4.5v3.6l4 2.2.5-.9-3.5-1.9v-3z"/></svg>;
    },
  });