# fds-coreui-components-react
React wrappers for Fintraffic Design System's [Core UI Components](https://github.com/fintraffic-design/fds-coreui-components).

# Install

```shell
npm i --save @fintraffic/fds-coreui-components-react
```

# Usage

Usage of React component wrappers.

The simplest way to import and register a React component is importing it directly from the `@fintraffic/fds-coreui-components-react` package.

```js
import { FdsButton, FdsButtonVariant } from '@fintraffic/fds-coreui-components-react'
```

```jsx
<FdsButton
  label="My Button"
  icon="plus"
  variant={FdsButtonVariant.primary}
  onClick={handleMyButtonClick}
/>
```

However this will cause all of the components to be loaded and registered (not just the ones you import).

> NOTE: when using React, make sure to import from the `@fintraffic/fds-coreui-components-react` package (note the `-react` suffix) to get the React components. If you import from `@fintraffic/fds-coreui-components` you will get the native web components instead.

If you want to load and register only a specific component (and its internal dependencies) you can do so by importing from a component specific path:

```js
import { FdsButton, FdsButtonVariant } from '@fintraffic/fds-coreui-components-react/dist/button.js'
```

# Licencing
Copyright © Fintraffic 2024
Source code of this program is licensed under the [EUPL v1.2](./LICENCE)
