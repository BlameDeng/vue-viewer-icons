import { defineComponent, SVGAttributes } from "vue";

  export const SvgLocation = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a5.24985 5.24985 0 0 0 -5.3 5.2c0 3.59388 5.3 10.8 5.3 10.8s5.3-7.10614 5.3-10.8a5.31552 5.31552 0 0 0 -5.3-5.2zm-.09711 8a2.7 2.7 0 1 1 2.7-2.7 2.7 2.7 0 0 1 -2.7 2.7z"/></svg>;
    },
  });