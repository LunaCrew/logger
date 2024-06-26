import colors from 'src/helper/EnumColor'

describe('colors', () => {
  it('should have the correct color keys', () => {
    expect(colors).toHaveProperty('base')
    expect(colors).toHaveProperty('black')
    expect(colors).toHaveProperty('cyan')
    expect(colors).toHaveProperty('red')
    expect(colors).toHaveProperty('blue')
    expect(colors).toHaveProperty('yellow')
    expect(colors).toHaveProperty('green')
    expect(colors).toHaveProperty('white')
    expect(colors).toHaveProperty('blackOnWhite')
    expect(colors).toHaveProperty('whiteOnGreen')
    expect(colors).toHaveProperty('whiteOnRed')
    expect(colors).toHaveProperty('whiteOnBlue')
    expect(colors).toHaveProperty('whiteOnYellow')
  })

  it('should have the correct color values', () => {
    expect(colors.base).toBe('\x1b[0m')
    expect(colors.black).toBe('\x1b[30m')
    expect(colors.cyan).toBe('\x1b[36m')
    expect(colors.red).toBe('\x1b[31m')
    expect(colors.blue).toBe('\x1b[34m')
    expect(colors.yellow).toBe('\x1b[33m')
    expect(colors.green).toBe('\x1b[32m')
    expect(colors.white).toBe('\x1b[37m')
    expect(colors.blackOnWhite).toBe('\x1b[30m\x1b[47m')
    expect(colors.whiteOnGreen).toBe('\x1b[37m\x1b[42m')
    expect(colors.whiteOnRed).toBe('\x1b[37m\x1b[41m')
    expect(colors.whiteOnBlue).toBe('\x1b[37m\x1b[44m')
    expect(colors.whiteOnYellow).toBe('\x1b[37m\x1b[43m')
  })
})
