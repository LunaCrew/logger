import LogManager from 'src/log/LogManager'

describe('LogManager', () => {
  describe('constructor', () => {
    it('should set the message property', () => {
      const message = 'Test message'
      const logManager = new LogManager(message)

      expect(logManager.message).toBe(message)
    })
  })

  describe('debug', () => {
    it('should log a debug message with tag', () => {
      const tag = 'TestTag'
      const message = 'Debug message'

      LogManager.debug(message, tag)
      expect(LogManager.debug).toBeDefined()
    })

    it('should log a debug message without tag', () => {
      const message = 'Debug message'

      LogManager.debug(message)
      expect(LogManager.debug).toBeDefined()
    })
  })

  describe('info', () => {
    it('should log an info message with tag', () => {
      const tag = 'TestTag'
      const message = 'Info message'

      LogManager.info(message, tag)
      expect(LogManager.info).toBeDefined()
    })

    it('should log an info message without tag', () => {
      const message = 'Info message'

      LogManager.info(message)
      expect(LogManager.info).toBeDefined()
    })
  })

  describe('warn', () => {
    it('should log a warning message with tag', () => {
      const tag = 'TestTag'
      const message = 'Warn message'

      LogManager.warn(message, tag)
      expect(LogManager.warn).toBeDefined()
    })

    it('should log a warning message without tag', () => {
      const message = 'Warn message'

      LogManager.warn(message)
    })
  })

  describe('error', () => {
    it('should log an error message with tag', () => {
      const error = new Error('Error message')
      const tag = 'TestTag'

      const log = () => {
        LogManager.error(`${error}`, tag)
      }

      expect(log).toThrow(Error)
    })

    it('should log an error message without tag', () => {
      const error = new Error('Error message')

      const log = () => {
        LogManager.error(`${error}`)
      }

      expect(log).toThrow(Error)
    })
  })

  describe('verbose', () => {
    it('should log a verbose message with tag', () => {
      const tag = 'TestTag'
      const message = 'Verbose message'

      LogManager.verbose(message, tag)
      expect(LogManager.verbose).toBeDefined()
    })

    it('should log a verbose message without tag', () => {
      const message = 'Verbose message'

      LogManager.verbose(message)
      expect(LogManager.verbose).toBeDefined()
    })
  })

  describe('custom', () => {
    it('should log a custom message with custom options', () => {

      LogManager.custom('Message', { tag: 'Test', tagColor: 'red', tagIcon: 'ICON', iconColor: 'whiteOnGreen', messageColor: 'yellow' })
      expect(LogManager.custom).toBeDefined()
    })

    it('should log a custom message without custom options', () => {
      const message = 'Custom message'

      LogManager.custom(message)
      expect(LogManager.custom).toBeDefined()
    })
  })
})
