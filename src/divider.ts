import React from 'react'
import { createComponent } from '@lit/react'
import { FdsDivider as _FdsDivider } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-divider.js'

export const FdsDivider = createComponent({
  tagName: 'fds-divider',
  elementClass: _FdsDivider,
  react: React,
})
