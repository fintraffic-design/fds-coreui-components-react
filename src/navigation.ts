import React from 'react'
import { EventName, createComponent } from '@lit/react'
import { FdsNavigation as _FdsNavigation, FdsNavigationItem } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-navigation'

export {
  FdsNavigationItem,
  FdsNavigationItemPosition,
  FdsNavigationVariant,
} from '@fintraffic/fds-coreui-components'

export const FdsNavigation = createComponent({
  tagName: 'fds-navigation',
  elementClass: _FdsNavigation,
  react: React,
  events: {
    onSelect: 'select' as EventName<CustomEvent<FdsNavigationItem> & { target: _FdsNavigation }>,
  },
})
