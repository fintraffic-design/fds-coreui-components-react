import React from 'react'
import { createComponent } from '@lit/react'
import { FdsPopover as _FdsPopover } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-popover.js'

export { FdsPopoverPosition } from '@fintraffic/fds-coreui-components'

export const FdsPopover = createComponent({
  tagName: 'fds-popover',
  elementClass: _FdsPopover,
  react: React,
})
