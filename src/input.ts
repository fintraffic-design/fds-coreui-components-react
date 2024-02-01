import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsInput as _FdsInput } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-input'

export const FdsInput = createComponent({
  tagName: 'fds-input',
  elementClass: _FdsInput,
  react: React,
  events: {
    onChange: 'change' as EventName<CustomEvent<string> & { target: _FdsInput }>,
  },
})
