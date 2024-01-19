import { lazy } from 'react'

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolve(import('./AboutPage').then(module => ({ default: module.AboutPage }))), 1500)
}))