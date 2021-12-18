import { defineComponent, SVGAttributes } from "vue";

  export const SvgUserAdd = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7 10v3.5h-6.27a.77713.77713 0 0 1 -.67-.33.84042.84042 0 0 1 0-.66l1.52-3.36a.64457.64457 0 0 1 .34-.33l2.36-1.23h.17a3.99476 3.99476 0 0 0 2.3.84 3.876 3.876 0 0 0 2.26-.84h.17l.82.42v1.99zm-3.3098-6.4114c0-2.7342 1.3517-3.5886 3.0417-3.5886s3.0418.8544 3.0418 3.5886a3.35314 3.35314 0 0 1 -3.0418 3.5886 3.35319 3.35319 0 0 1 -3.0417-3.5886zm9.3098 4.4114v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"/></svg>;
    },
  });