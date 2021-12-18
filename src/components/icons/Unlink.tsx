import { defineComponent, SVGAttributes } from "vue";

  export const SvgUnlink = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7.3877 8.3951a1.8419 1.8419 0 0 0 2.4288.9274l3.238-1.546a1.9038 1.9038 0 0 0 .9108-2.4731 1.8419 1.8419 0 0 0 -2.4288-.9274l-1.113.515-2.0235-1.03 2.53-1.134a3.49 3.49 0 0 1 4.7564 1.8549 3.6884 3.6884 0 0 1 -1.8216 4.8432l-3.238 1.546c-3.947 1.855-5.06-2.37-5.06-2.679l1.518-.721.304.824"/><path d="m3.947 8.601-1.113 1.752a3.5605 3.5605 0 0 0 1.2144 5.0493 3.4283 3.4283 0 0 0 4.9588-1.2366l1.417-2.37a3.7635 3.7635 0 0 1 -2.3276.4122l-.708 1.133a1.7822 1.7822 0 0 1 -2.4288.6183 1.853 1.853 0 0 1 -.6072-2.4731l1.113-1.752"/><path d="m0 6.614.226-1 4.538 1.059-.227 1.01-4.537-1.06"/><path d="m6.238.155 1-.155.702 4.686-1 .155-.703-4.686"/><path d="m.569.971.716-.729 4.725 4.808-.718.73z"/></svg>;
    },
  });