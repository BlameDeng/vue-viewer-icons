import { defineComponent, SVGAttributes } from "vue";

  export const SvgSyncDisabled = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8.17078 13h-4.17078v2.53125l-4-3.53125 4-3.53125v2.53125h4.17078l1 1zm-6.17078-8h10v2.53125l4-3.53125-4-3.53125v2.53125h-11a1.04767 1.04767 0 0 0 -1 1v5.84375l2-1.84375zm12.12 3.465-2.121 2.121-2.121-2.121-1.414 1.414 2.121 2.121-2.121 2.121 1.414 1.414 2.121-2.121 2.121 2.121 1.414-1.414-2.121-2.121 2.121-2.121z"/></svg>;
    },
  });