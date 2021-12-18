import { defineComponent, SVGAttributes } from "vue";

  export const SvgGroup = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6 2-4 8h8zm3.16339 4.0907a4.00049 4.00049 0 1 1 -3.02197 4.9093h5.47658zm2.83661-6.0907v1h3v3h1v-4zm4 12h-1v3h-3v1h4zm-16 0h1v3h3v1h-4zm4-12v1h-3v3h-1v-4z" fill-rule="evenodd"/></svg>;
    },
  });