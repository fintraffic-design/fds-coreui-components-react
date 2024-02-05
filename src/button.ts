import React from 'react'
import { createComponent } from '@lit/react'
import { FdsButton as _FdsButton } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-button'

export { FdsButtonVariant } from '@fintraffic/fds-coreui-components'

export const FdsButton = createComponent({
  tagName: 'fds-button',
  elementClass: _FdsButton,
  react: React,
})
