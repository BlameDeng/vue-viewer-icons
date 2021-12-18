import { defineComponent, SVGAttributes } from "vue";

  export const SvgHeart = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.98027 4.82451c.4806 4.38112-7.98027 11.17528-7.98027 11.17528s-8.46087-6.79416-7.98027-11.17528c.40771-3.71674 3.34889-4.83059 5.67582-3.84567a4.96631 4.96631 0 0 1 2.30445 2.22442 4.96631 4.96631 0 0 1 2.30445-2.22442c2.32693-.98492 5.26811.12893 5.67582 3.84567z"/></svg>;
    },
  });