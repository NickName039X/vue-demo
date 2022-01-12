// declare module的作用是扩展模块
declare module '@/mixins/PagingData' {
    export const PagingData: any
  }
  
  declare module 'element-ui/lib/locale/lang/*' {
    export const elementLocale: any
  }
  
  declare module '*.gif' {
    export const gif: any
  }
  
  // TODO: remove this part after vue-count-to has its typescript file
  declare module 'vue-count-to'
  
  // TODO: remove this part after vuedraggable has its typescript file
  declare module 'vuedraggable'
  
  // TODO: remove this part after vue2-dropzone has its typescript file
  declare module 'vue2-dropzone'
  
  // TODO: remove this part after vue-image-crop-upload has its typescript file
  declare module 'vue-image-crop-upload'
  
  declare interface Window {
    __POWERED_BY_QIANKUN__: any
  }
  