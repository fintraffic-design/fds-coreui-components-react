import React from 'react'
import { EventName, ReactWebComponent, createComponent } from '@lit/react'
import { FdsDropdown as _FdsDropdown, FdsDropdownEvent } from '@fintraffic/fds-coreui-components'
import '@fintraffic/fds-coreui-components/dist/define/fds-dropdown'

export { FdsDropdownEvent, FdsDropdownOption } from '@fintraffic/fds-coreui-components'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FdsDropdownRaw = (function <T>() {
  return createComponent({
    tagName: 'fds-dropdown',
    elementClass: _FdsDropdown<T>,
    react: React,
    events: {
      onSelect: 'select' as EventName<FdsDropdownEvent<T> & { target: _FdsDropdown<T> }>,
    },
  })
})()

// Workaround for creating a React component with generics so the component
// user can specify the type argument `T` instead of it being `unknown`
// Example usage in JSX with explic type argument:
//   <FdsDropdown<string> ... />
//   <FdsDropdown<number> ... />
// TypeScript should also be able to infer the type from given `options` or
// `value` property so this should work even without the type argument:
//   <FdsDropdown ... />

type FdsDropdownGeneric<T> = ReactWebComponent<
  _FdsDropdown<T>,
  {
    onSelect: EventName<FdsDropdownEvent<T> & { target: _FdsDropdown<T> }>
  }
>
type SourceProps<T> = React.ComponentProps<FdsDropdownGeneric<T>>

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function FdsDropdown<T>(props: SourceProps<T>) {
  return React.createElement(FdsDropdownRaw as FdsDropdownGeneric<T>, props)
}
