import { defineComponent, SVGAttributes } from "vue";

  export const SvgFireExtinguisher = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11 2.18372v-.46631l3.27612.58191s.01636-.96973-3.27612-1.26075v-.021c2.67072-.23601 2.88361-1.01757 2.88361-1.01757l-2.88361.30573v-.30573h-2v.5h-1a4.00458 4.00458 0 0 0 -4 4v4.5l-1 2v5h3v-5l-1-2v-4.5a3.00328 3.00328 0 0 1 3-3h1v.68372a2.99121 2.99121 0 0 0 -2 2.81628v10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-10.5a2.99121 2.99121 0 0 0 -2-2.81628z"/></svg>;
    },
  });