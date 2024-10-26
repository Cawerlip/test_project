import { render } from '@testing-library/react'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '../../../config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderOptions {
  route?: string;
}

export function componentRender(component: React.ReactNode, options: componentRenderOptions = {}) {
  const { route = '/' } = options
  return render(
    <MemoryRouter initialEntries={[route]} >
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter >

  )
} 