import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusUpdate = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8.0092 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm0 13.7a5.78028 5.78028 0 0 1 -4.7-2.4l-1.1 1v-3.6h3.9l-1.7 1.6a4.3506 4.3506 0 0 0 3.6 1.9 4.296 4.296 0 0 0 4.2-3.6h1.4a5.64027 5.64027 0 0 1 -5.6 5.1zm2.1-6.4 1.5-1.5a3.967 3.967 0 0 0 -3.6-2.1 4.296 4.296 0 0 0 -4.2 3.6h-1.5a5.733 5.733 0 0 1 5.7-5 6.065 6.065 0 0 1 4.7 2.4l1-1v3.6z"/></svg>;
    },
  });