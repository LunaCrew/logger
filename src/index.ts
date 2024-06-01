import { Color } from './types/Color'
import LogManager from './log/LogManager'

/**
 * Log class provides static methods for logging messages with different log levels.
 * @method d - The debug message to log.
 * @method i - The informational message to log.
 * @method w - The warning message to log.
 * @method e - The error message to log.
 * @method v - The verbose message to log.
 * @method custom - The custom message to log. 
 */
export default class Log {
  static readonly d = (message: string, tag: string = '') => {
    return LogManager.debug(message, tag)
  }

  static readonly i = (message: string, tag: string = '') => {
    return LogManager.info(message, tag)
  }

  static readonly w = (message: string, tag: string = '') => {
    return LogManager.warn(message, tag)
  }

  static readonly e = (message: string, tag: string = '') => {
    return LogManager.error(message, tag)
  }

  static readonly v = (message: string, tag: string = '') => {
    return LogManager.verbose(message, tag)
  }

  static readonly custom = (message: string, options: { tag?: string, tagColor?: Color, tagIcon?: string, iconColor?: Color, messageColor?: Color }) => {
    return LogManager.custom(message, options)
  }
}