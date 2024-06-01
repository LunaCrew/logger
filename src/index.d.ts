import { Color } from './types/Color'

declare module '@lunacrew/logger' {
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
    static readonly d: (message: string, tag?: string) => void
    static readonly i: (message: string, tag?: string) => void
    static readonly w: (message: string, tag?: string) => void
    static readonly e: (message: string, tag?: string) => void
    static readonly v: (message: string, tag?: string) => void
    static readonly custom: (message: string, options: { tag?: string, tagColor?: Color, tagIcon?: string, iconColor?: Color, messageColor?: Color }) => void
  }
}