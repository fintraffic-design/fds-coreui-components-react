import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsDropdown as _FdsDropdown, FdsDropdownEvent } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-dropdown'

export { FdsDropdownEvent, FdsDropdownOption } from '@fintraffic/fds-coreui-components'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const FdsDropdown = <T>() =>
  createComponent({
    tagName: 'fds-dropdown',
    elementClass: _FdsDropdown<T>,
    react: React,
    events: {
      onSelect: 'select' as EventName<FdsDropdownEvent<T> & { target: _FdsDropdown<T> }>,
    },
  })
