import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowSplitHorizontal = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0,0V16H16V0H0M14,1h1V2H14V1M12,1h1V2H12V1m3,3V9H1V4H15M1,15V10H15v5H1"/></svg>;
    },
  });