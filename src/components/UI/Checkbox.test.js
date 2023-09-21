import { render, screen, expert } from '@testing-library/vue'

import Checkbox from './Checkbox.vue'

const label = 'Test label'

test('render checkbox witch label', () => {
  const options = {
    props: {
      label,
    },
  }

  render(Checkbox, options)

  // const checkbox = screen.getByLabelText(label)
  // console.log(checkbox)
  screen.debug()
  // expert(checkbox.cheched).toBe(true)
})
