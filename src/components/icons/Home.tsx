import { defineComponent, SVGAttributes } from "vue";

  export const SvgHome = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m2 14.6s0 .4.3.4h4.7v-4h2v4h4.5c.5 0 .5-.4.5-.4v-6.1l-6-4.5-6 4.5zm12-9.3v-3.3h-2v1.8l-4-2.8-8 5.7 1 1.3 7-5 7 5 1-1.3z"/></svg>;
    },
  });