import { render, screen } from '@testing-library/vue'

import Button from './Button.vue'

test('render base button', () => {
  const options = {
    slots: {
      icon: 'icon',
      default: 'Test button',
    },
  }

  render(Button, options)

  // debug()
  // console.log(prettyDOM())
  // screen.debug()
  screen.getByText(/Test/)
})
