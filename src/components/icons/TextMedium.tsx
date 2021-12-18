import { defineComponent, SVGAttributes } from "vue";

  export const SvgTextMedium = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m2.999 2.4427a.4264.4264 0 0 1 .4041-.4433h9.1939a.4264.4264 0 0 1 .4042.4433v2.11c0 .244-.122.443-.27.443s-.344-.183-.433-.406l-.35-.708a.6742.6742 0 0 0 -.567-.4056h-1.9072a.5655.5655 0 0 0 -.4728.5239v8c0 .244.242.872.455.942l1.162.279a.55.55 0 0 1 .3871.4533.3725.3725 0 0 1 -.4041.326h-5.2022a.3725.3725 0 0 1 -.4041-.326.55.55 0 0 1 .3871-.4533l1.141-.279c.213-.07.478-.698.478-.942v-8a.5875.5875 0 0 0 -.4951-.5235h-1.8859a.6744.6744 0 0 0 -.5669.4058l-.35.708c-.09.223-.285.406-.433.406s-.271-.199-.271-.443v-2.11"/></svg>;
    },
  });