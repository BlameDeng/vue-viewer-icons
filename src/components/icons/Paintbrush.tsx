import { defineComponent, SVGAttributes } from "vue";

  export const SvgPaintbrush = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.4844,7.2773A1.41309,1.41309,0,0,1,9.563,5.872L10.375,2a2,2,0,0,0-4,0l.812,3.8721a1.413,1.413,0,0,1-.9214,1.4052L3.375,8V9h10V8ZM13.375,10s1,4-1,6H5.805V14.56L5.135,16H3.765a1.94569,1.94569,0,0,0,.26-1.79A2.97051,2.97051,0,0,1,2.635,16H.375s3-1,3-6Z"/></svg>;
    },
  });