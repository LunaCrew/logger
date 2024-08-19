import Log from 'src/index'
import LogManager from '../src/log/LogManager'

describe('Log', () => {
  let logManagerSpy: jest.SpyInstance

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('Debug', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'debug')
    })

    it('should call LogManager.debug when calling Log.d with tag', () => {
      const tag = 'Test'
      const message = 'Debug message'

      Log.d(message, tag)

      expect(logManagerSpy).toHaveBeenCalledWith(message, tag)
    })

    it('should call LogManager.debug when calling Log.d without tag', () => {
      const message = 'Debug message'

      Log.d(message)

      expect(logManagerSpy).toHaveBeenCalledWith(message, undefined)
    })
  })


  describe('Info', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'info')
    })

    it('should call LogManager.info when calling Log.i with tag', () => {
      const tag = 'Test'
      const message = 'Info message'

      Log.i(message, tag)

      expect(logManagerSpy).toHaveBeenCalledWith(message, tag)
    })

    it('should call LogManager.info when calling Log.i without tag', () => {
      const message = 'Info message'

      Log.i(message)

      expect(logManagerSpy).toHaveBeenCalledWith(message, undefined)
    })
  })

  describe('Warn', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'warn')
    })

    it('should call LogManager.warn when calling Log.w with tag', () => {
      const tag = 'Test'
      const message = 'Warning message'

      Log.w(message, tag)

      expect(logManagerSpy).toHaveBeenCalledWith(message, tag)
    })

    it('should call LogManager.warn when calling Log.w without tag', () => {
      const message = 'Warning message'

      Log.w(message)

      expect(logManagerSpy).toHaveBeenCalledWith(message, undefined)
    })
  })


  describe('Error', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'error')
    })

    it('should call LogManager.error when calling Log.e with tag', () => {
      const tag = 'Test'
      const message = 'Error message'

      Log.e(`${message}`, tag)
      expect(logManagerSpy).toHaveBeenCalledWith(message, tag)
    })

    it('should call LogManager.error when calling Log.e without tag', () => {
      const message = 'Error message'

      Log.e(`${message}`)

      expect(logManagerSpy).toHaveBeenCalledWith(message, undefined)
    })
  })


  describe('Verbose', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'verbose')
    })

    it('should call LogManager.verbose when calling Log.v with tag', () => {
      const tag = 'Test'
      const message = 'Verbose message'

      Log.v(message, tag)

      expect(logManagerSpy).toHaveBeenCalledWith(message, tag)
    })

    it('should call LogManager.verbose when calling Log.v without tag', () => {
      const message = 'Verbose message'

      Log.v(message)

      expect(logManagerSpy).toHaveBeenCalledWith(message, undefined)
    })
  })

  describe('Custom', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'custom')
    })

    it('should call LogManager.custom when calling Log.custom with tag', () => {
      const tag = 'Test'
      const message = 'Custom message'
      const tagColor = 'red'
      const tagIcon = 'X'
      const messageColor = 'blue'

      Log.custom(message, { tag, tagColor, tagIcon, messageColor })

      expect(logManagerSpy).toHaveBeenCalledWith(message, {
        tag: ' :: Test :: ',
        tagColor: tagColor,
        tagIcon: ' X ',
        iconColor: 'base',
        messageColor
      })
    })
  })
})
