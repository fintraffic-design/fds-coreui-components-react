import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsCard as _FdsCard } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-card.js'

export { FdsCardElevation } from '@fintraffic/fds-coreui-components'

export const FdsCard = createComponent({
  tagName: 'fds-card',
  elementClass: _FdsCard,
  react: React,
  events: {
    onCornerClick: 'corner-click' as EventName<CustomEvent<void> & { target: _FdsCard }>,
  },
})
