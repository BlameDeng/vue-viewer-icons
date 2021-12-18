import { defineComponent, SVGAttributes } from "vue";

  export const SvgSoundMute = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10.69329 1.72743-4.18186 3.26672h-2.04743a.949.949 0 0 0 -.964.93685v4.12776a.949.949 0 0 0 .964.9368h2.04743l4.19857 3.27451a1.10972 1.10972 0 0 0 1.78935-.8695l.00065-10.82006a1.12618 1.12618 0 0 0 -1.8069-.85318z"/></svg>;
    },
  });