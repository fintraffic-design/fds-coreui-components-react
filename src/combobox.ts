import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsCombobox as _FdsCombobox, FdsComboboxEvent } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-combobox'

export { FdsComboboxEvent } from '@fintraffic/fds-coreui-components'

export const FdsCombobox = createComponent({
  tagName: 'fds-combobox',
  elementClass: _FdsCombobox,
  react: React,
  events: {
    onSelect: 'select' as EventName<FdsComboboxEvent & { target: _FdsCombobox }>,
  },
})
