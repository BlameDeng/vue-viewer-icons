import { defineComponent, SVGAttributes } from "vue";

  export const SvgPolygon = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.70057,2.02728,14.064,9.981l-3.76571,4.51854H1.50057V6.28869l6.2-4.26255M8,0,0,5.50018V16H11l5-5.99957L8,.00114"/></svg>;
    },
  });