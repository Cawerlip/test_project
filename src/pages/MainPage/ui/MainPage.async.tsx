import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => 
  // @ts-ignore
    resolve(import('./MainPage').then(module => ({ default: module.MainPage }))) , 1500) 
}))