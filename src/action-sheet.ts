import React from 'react'
import { createComponent } from '@lit/react'
import { FdsActionSheet as _FdsActionSheet } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-action-sheet.js'

export const FdsActionSheet = createComponent({
  tagName: 'fds-action-sheet',
  elementClass: _FdsActionSheet,
  react: React,
})
