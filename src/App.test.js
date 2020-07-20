import React from 'react'
import App from './App'
import {render} from '@testing-library/react'

test("renders without error", () => {
  render(<App />)
})

