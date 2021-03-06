import { defineComponent, SVGAttributes } from "vue";

  export const SvgSmileyHappyVeryHollow = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 13.5a4.77525 4.77525 0 0 1 -5-4.5.5.5 0 0 1 1 0 3.77962 3.77962 0 0 0 4 3.5 3.77962 3.77962 0 0 0 4-3.5.5.5 0 0 1 1 0 4.77525 4.77525 0 0 1 -5 4.5zm2-7.25a1.14615 1.14615 0 0 0 1 1.25 1.14615 1.14615 0 0 0 1-1.25 1.14615 1.14615 0 0 0 -1-1.25 1.14615 1.14615 0 0 0 -1 1.25zm-6 0a1.14615 1.14615 0 0 0 1 1.25 1.14615 1.14615 0 0 0 1-1.25 1.14615 1.14615 0 0 0 -1-1.25 1.14615 1.14615 0 0 0 -1 1.25zm4-5.25a7 7 0 1 0 7 7 7.00793 7.00793 0 0 0 -7-7m0-1a8 8 0 1 1 -8 8 8 8 0 0 1 8-8z"/></svg>;
    },
  });