import { defineComponent, SVGAttributes } from "vue";

  export const SvgMoreVerticalSmall = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm0 3a1 1 0 1 1 -1-1 .9999.9999 0 0 1 1 1zm0 3a1 1 0 1 1 -1-1.0001 1 1 0 0 1 1 1.0001z" fill-rule="evenodd"/></svg>;
    },
  });