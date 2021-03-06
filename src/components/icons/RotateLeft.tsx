import { defineComponent, SVGAttributes } from "vue";

  export const SvgRotateLeft = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" ><path d="M8.4,0.4c-2.8,0-5.3,1.5-6.6,3.8L0,2.4v5.2h5.2L3,5.4C4,3.4,6,2,8.4,2c3.3,0,6,2.7,6,6s-2.7,6-6,6	c-2.6,0-4.8-1.7-5.7-4H1c0.9,3.2,3.8,5.6,7.4,5.6c4.2,0,7.6-3.4,7.6-7.6S12.6,0.4,8.4,0.4z"/></svg>;
    },
  });