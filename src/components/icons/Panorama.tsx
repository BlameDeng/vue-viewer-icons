import { defineComponent, SVGAttributes } from "vue";

  export const SvgPanorama = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 15.99 15.67" xmlns="http://www.w3.org/2000/svg"><path d="m3.9375 8.67h.9375a.35728.35728 0 0 0 0-.70892h-.9375a.35728.35728 0 0 0 0 .70892zm8.4375.5759h-2.15625l-.34375-.88653a.801.801 0 0 0 -.71875-.39829h-2.40625a.79428.79428 0 0 0 -.74375.39829l-.3375.88653h-2.04375a.63389.63389 0 0 0 -.625.64241v5.13928a.63389.63389 0 0 0 .625.64241h8.75a.63389.63389 0 0 0 .625-.64241v-5.13928a.63389.63389 0 0 0 -.625-.64241zm-4.375 5.78169a2.57061 2.57061 0 1 1 2.499-2.64025q.001.03533.001.07066a2.53554 2.53554 0 0 1 -2.5 2.56959zm2.8125-4.49687a.32133.32133 0 1 1 .31238-.33l.00012.00884a.31694.31694 0 0 1 -.3125.32116zm-2.8125.13928a1.78863 1.78863 0 1 0 1.73882 1.83709l.00068-.04909a1.76423 1.76423 0 0 0 -1.7395-1.788m3-9h-6l-5-1v12l2-.4v-1.02l-1 .2v-9.56l3 .6v4.47h.88a.48643.48643 0 0 1 .12.01v-4.3h6v5.58h1v-5.76l3-.6v9.56l-1-.2v1.02l2 .4v-12z"/></svg>;
    },
  });