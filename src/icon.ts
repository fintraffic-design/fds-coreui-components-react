import React from 'react'
import { createComponent } from '@lit/react'
import { FdsIcon as _FdsIcon } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-icon'

export { FdsIcons, FdsIconType } from '@fintraffic/fds-coreui-components'

export const FdsIcon = createComponent({
  tagName: 'fds-icon',
  elementClass: _FdsIcon,
  react: React,
})
