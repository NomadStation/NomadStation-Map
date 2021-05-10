import React from 'react'
import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { theme } from '../themes'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'rc-slider/assets/index.css'

const req = require.context('../stories', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withThemesProvider([theme]))
configure(loadStories, module)
