import { defineComponent, SVGAttributes } from "vue";

  export const Svg2d = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12,5c0,.17,0,.33,0,.5A6.48,6.48,0,0,1,11.82,7H14v7H7V11.82A6.48,6.48,0,0,1,5.5,12L5,12v4H16V5Z"/><path d="M5.5 2A3.5 3.5 0 1 1 2 5.5 3.5 3.5 0 0 1 5.5 2m0-2A5.5 5.5 0 1 0 11 5.5 5.5 5.5 0 0 0 5.5 0"/></svg>;
    },
  });