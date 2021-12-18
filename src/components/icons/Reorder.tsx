import { defineComponent, SVGAttributes } from "vue";

  export const SvgReorder = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26.52112,5.84863,29,4,22,3l2,7,1.58124-2.9765c2.56384,1.77075,3.92328,4.26331,3.67169,6.9057A8.457,8.457,0,0,1,23,21.47826V23a10.38817,10.38817,0,0,0,7.74707-8.9292C31.04309,10.94714,29.45074,7.92682,26.52112,5.84863ZM5.36673,26.15137,2.82635,28,10,29,7.95039,22,6.32993,24.9765c-2.62744-1.77075-4.0206-4.26331-3.76277-6.9057a8.5135,8.5135,0,0,1,6.408-7.54906V9A10.47174,10.47174,0,0,0,1.036,17.9292C.73258,21.05286,2.36443,24.07318,5.36673,26.15137ZM19,4.32278,17.67722,3,16,4.67722,14.32278,3,13,4.32278,14.67722,6,13,7.67722,14.32278,9,16,7.32278,17.67722,9,19,7.67722,17.32278,6Zm0,10L17.67722,13,16,14.67722,14.32278,13,13,14.32278,14.67722,16,13,17.67722,14.32278,19,16,17.32278,17.67722,19,19,17.67722,17.32278,16Zm0,10L17.67722,23,16,24.67722,14.32278,23,13,24.32278,14.67722,26,13,27.67722,14.32278,29,16,27.32278,17.67722,29,19,27.67722,17.32278,26Z"/></svg>;
    },
  });