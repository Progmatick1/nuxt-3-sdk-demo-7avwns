import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/projects/nuxt-3-sdk-demo-7avwns/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}