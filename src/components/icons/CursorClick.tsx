import { defineComponent, SVGAttributes } from "vue";

  export const SvgCursorClick = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2.5,5h3a.5.5,0,0,1,0,1h-3a.5.5,0,0,1,0-1Z"/><path d="M7.5,0A.5.5,0,0,1,8,.5v3a.5.5,0,1,1-1,0V.5A.5.5,0,0,1,7.5,0Z"/><path d="M3.17,9.85a.59.59,0,0,1,0-.8L4.91,7.18a.5.5,0,0,1,.74,0,.59.59,0,0,1,0,.8L3.91,9.85A.5.5,0,0,1,3.17,9.85Z"/><path d="M3.91,1.18,5.65,3a.59.59,0,0,1,0,.8.5.5,0,0,1-.74,0L3.17,2a.59.59,0,0,1,0-.8A.5.5,0,0,1,3.91,1.18Z"/><path d="M11.86,1.18a.59.59,0,0,1,0,.8L10.12,3.85a.5.5,0,0,1-.74,0,.59.59,0,0,1,0-.8l1.74-1.87A.5.5,0,0,1,11.86,1.18Z"/><path d="M9.5,5h3a.5.5,0,0,1,0,1h-3a.5.5,0,0,1,0-1Z"/><path d="M7.13,13.5a.24.24,0,0,0,.27,0l1.89-.81,1.23,3.1a.28.28,0,0,0,.27.18l.12,0L12,15.51a.32.32,0,0,0,.16-.4L10.92,12l1.89-.81A.3.3,0,0,0,13,11a.31.31,0,0,0-.08-.28L7.5,5.06A.28.28,0,0,0,7.19,5,.3.3,0,0,0,7,5.28v8A.32.32,0,0,0,7.13,13.5Z"/></svg>;
    },
  });