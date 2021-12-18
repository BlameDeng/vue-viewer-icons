import { defineComponent, SVGAttributes } from "vue";

  export const SvgLightbulb = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10 14a2 2 0 0 1 -4 0m.5-2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m4.5-6.50019a3.77212 3.77212 0 0 0 -2.28937-3.45513.50371.50371 0 0 0 -.66583.24948.49866.49866 0 0 0 .248.66016l.00307.00138a2.78366 2.78366 0 0 1 1.69777 2.54411.50319.50319 0 0 0 1.00636 0m-3-5.49981a4.9981 4.9981 0 0 0 -4.15558 7.778h-.00242l.011.017v.001l2.147 3.204h4l2.158-3.222h-.002a4.998 4.998 0 0 0 -4.156-7.778" fill-rule="evenodd"/></svg>;
    },
  });