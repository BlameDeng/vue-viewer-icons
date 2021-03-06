import { defineComponent, SVGAttributes } from "vue";

  export const SvgModel = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14 11.126-6-2.954v-6.811l-.5-.246-.5.246v6.811l-6 2.954v.559l.565.278 5.935-2.922 5.935 2.922.565-.278z" opacity=".33"/><path d="m7.5 0-7.5 3.69232v8.61536l7.5 3.69232 7.5-3.69232v-8.61536zm5.93549 4.03674-5.93549 2.92226-5.93549-2.92232 5.93549-2.92206zm-12.43549 7.64862v-6.81121l6 2.95349v6.81158zm13 0-6 2.95386v-6.81164l6-2.9535z"/></svg>;
    },
  });