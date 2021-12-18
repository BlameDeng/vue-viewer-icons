import { defineComponent, SVGAttributes } from "vue";

  export const SvgFontColor = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 14h14v2h-14zm6.9-11.4-6.9 6.9v3.5h3.5l6.9-6.9zm-3.9 9.4h-1v-1h-1v-1l1-1 2 2zm-.2-3.14a.26642.26642 0 0 1 -.36 0 .25354.25354 0 0 1 0-.36l4.52-4.51a.24749.24749 0 1 1 .35.35zm8.1-3.26-3.5-3.5 1.6-1.6a.375.375 0 0 1 .6 0l2.9 2.9a.375.375 0 0 1 0 .6z"/></svg>;
    },
  });