import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsCheckbox as _FdsCheckbox } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-checkbox'

export const FdsCheckbox = createComponent({
  tagName: 'fds-checkbox',
  elementClass: _FdsCheckbox,
  react: React,
  events: {
    onSelect: 'select' as EventName<CustomEvent<boolean> & { target: _FdsCheckbox }>,
  },
})
