import { defineComponent, SVGAttributes } from "vue";

  export const SvgClock = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8.6 9h-.2l-5-1.5a.48559.48559 0 0 1 -.3-.6.41926.41926 0 0 1 .6-.3l4.3 1.3v-2.4a.5.5 0 0 1 1 0v3a.75812.75812 0 0 1 -.2.4.34914.34914 0 0 1 -.2.1m-.6-7.5a6.5 6.5 0 1 1 -6.5 6.5 6.487 6.487 0 0 1 6.5-6.5m0-1.5a8 8 0 1 0 8 8 8.02352 8.02352 0 0 0 -8-8z"/></svg>;
    },
  });