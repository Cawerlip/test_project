import { lazy } from 'react'

export const MainPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolve(import('./MainPage').then(module => ({ default: module.MainPage }))), 1500)
}))