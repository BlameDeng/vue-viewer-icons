import { defineComponent, SVGAttributes } from "vue";

  export const SvgSoundLoud = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11.72617 5.17223a3.63009 3.63009 0 0 1 -.03351 5.66956.813.813 0 0 1 -1.09357-.13472l-.067-.067a.70591.70591 0 0 1 .11763-1.00944 2.02606 2.02606 0 0 0 .08409-3.19663.80271.80271 0 1 1 .99236-1.26181zm1.83433-2.25413a.81449.81449 0 0 0 -1.11066.11764.79447.79447 0 0 0 .10121 1.11066 4.96391 4.96391 0 0 1 0 7.70477.80191.80191 0 0 0 1.00945 1.24538 6.52839 6.52839 0 0 0 0-10.17859zm-6.36721-1.19067-4.18186 3.26672h-2.04743a.949.949 0 0 0 -.964.93685v4.12776a.949.949 0 0 0 .964.9368h2.04743l4.19857 3.27451a1.10972 1.10972 0 0 0 1.78935-.8695l.00065-10.82006a1.12618 1.12618 0 0 0 -1.8069-.85318z"/></svg>;
    },
  });