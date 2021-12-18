import { defineComponent, SVGAttributes } from "vue";

  export const SvgEditAll = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 6.85a.9629.9629 0 0 1 -.3.75l-1.35 1.35-3.225-3.375 1.35-1.275a1.0875 1.0875 0 0 1 1.5 0l1.875 1.875a1.79116 1.79116 0 0 1 .15.675zm-5.4-.75 3.3 3.3-6.6 6.6h-3.3v-3.3zm-3 8.1-1.875-1.875-.75.75v.825h1.05v1.05h.825zm3.15-6.675-4.275 4.275a.26185.26185 0 0 0 -.075.15c0 .15.075.15.15.15s.075 0 .15-.075l4.275-4.275a.26185.26185 0 0 0 .075-.15c0-.15-.075-.15-.15-.15s-.075 0-.15.075zm-8.75 2.475v-2h-2v-8h8v2h2v3.7l-1 1v-3.7h-6v6h3.7l-1 1zm0-3v-5h5v-1h-6v6z"/></svg>;
    },
  });