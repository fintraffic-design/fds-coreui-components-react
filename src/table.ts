import React from 'react'
import { createComponent } from '@lit/react'
import { FdsTable as _FdsTable } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-table'

export { FdsTableItem } from '@fintraffic/fds-coreui-components'

export const FdsTable = createComponent({
  tagName: 'fds-table',
  elementClass: _FdsTable,
  react: React,
})
