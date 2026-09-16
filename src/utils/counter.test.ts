import { describe, expect, it } from 'vitest'
import { formatCount, increment } from './counter'

describe('increment', () => {
  it('adds one by default', () => {
    expect(increment(0)).toBe(1)
    expect(increment(41)).toBe(42)
  })

  it('adds a custom step', () => {
    expect(increment(10, 5)).toBe(15)
  })

  it('handles negative steps', () => {
    expect(increment(3, -4)).toBe(-1)
  })
})

describe('formatCount', () => {
  it('renders the label used by the button', () => {
    expect(formatCount(0)).toBe('Count is 0')
    expect(formatCount(7)).toBe('Count is 7')
  })
})
