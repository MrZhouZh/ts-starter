import { describe, expect, it } from 'vitest'
import { sum, template } from '../src'

describe('should', () => {
  it('1 + 2 equals to 3', () => {
    expect(sum(1, 2)).equal(3)
  })

  it('function template params input string type.', () => {
    expect(
      template('Hello {0}! My name is {1}', 'World', 'MrZhouZh'),
    )
      .toMatchInlineSnapshot('"Hello World! My name is MrZhouZh"')
  })

  it('function template params input include number type.', () => {
    expect(
      template(
        'Hi {0}, you are looks like {1} years old.',
        'Tom',
        23,
      ),
    )
      .toMatchInlineSnapshot('"Hi Tom, you are looks like 23 years old."')
  })
})
