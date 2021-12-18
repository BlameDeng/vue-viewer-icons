import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowCollapse = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9 6.95652v-5.86335l2.1 2.18633 3.2-3.2795 1.7 1.68944-3.3 3.18013 2.2 2.087zm-9 7.354 3.3-3.2795-2.2-2.08692h5.9v5.86335l-2.1-2.08695-3.2 3.2795zm9-5.36642h5.9l-2.2 2.087 3.3 3.2795-1.7 1.6894-3.2-3.2795-2.1 2.08695zm-7.3-8.9441 3.2 3.2795 2.1-2.18633v5.86335h-5.9l2.2-2.08695-3.3-3.18013z"/></svg>;
    },
  });