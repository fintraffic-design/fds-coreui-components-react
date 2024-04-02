import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsDialog as _FdsDialog } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-dialog.js'

export const FdsDialog = createComponent({
  tagName: 'fds-dialog',
  elementClass: _FdsDialog,
  react: React,
  events: {
    onOutsideModalClick: 'outside-modal-click' as EventName<CustomEvent & { target: _FdsDialog }>,
  },
})
