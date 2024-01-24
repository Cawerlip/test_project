import { classNames } from './classNames'

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional params', () => {
    expect(classNames('someClass', {}, ['anotherClass', 'otherClass']))
      .toBe('someClass anotherClass otherClass')
  })
  test('with mods', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['anotherClass', 'otherClass']))
      .toBe('someClass anotherClass otherClass hovered scrollable')
  })
  test('with mods', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['anotherClass', 'otherClass']))
      .toBe('someClass anotherClass otherClass hovered')
  })
  test('with mod undefined', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['anotherClass', 'otherClass']))
      .toBe('someClass anotherClass otherClass hovered')
  })
})