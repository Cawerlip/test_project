import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => 
  // @ts-ignore
    resolve(import('./AboutPage').then(module => ({ default: module.AboutPage }))) , 1500) 
}))