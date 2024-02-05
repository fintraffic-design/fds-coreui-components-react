import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsAlert as _FdsAlert } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-alert'

export { FdsAlertVariant } from '@fintraffic/fds-coreui-components'

export const FdsAlert = createComponent({
  tagName: 'fds-alert',
  elementClass: _FdsAlert,
  react: React,
  events: {
    onDismissed: 'dismissed' as EventName<CustomEvent & { target: _FdsAlert }>,
  },
})
