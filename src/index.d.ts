import { Color } from './types/Color'

declare module '@ashtrindade/logger' {

  /**
   * The `Log` class provides static methods for logging messages with different log levels.
   * @method d - Logs a debug message with an optional tag.
   * @method i - Logs an informational message.
   * @method w - Logs a warning message with an optional tag.
   * @method e - Logs an error message with an optional tag.
   * @method v - Logs a verbose message with an optional tag.
   * @method custom - Logs a custom message with optional tag, colors, and icon.
   */
  export default class Log {

    /**
    * Logs a debug message with an optional tag.
    * 
    * @param {string} message  - The debug message to log.
    * @param {string} tag - An optional tag to include in the log message.
    */
    static readonly d: (message: string, tag?: string) => void

    /**
     * Logs an informational message.
     * 
     * @param {string} message - The message to log.
     * @param {string} tag - An optional tag for the log message.
     */
    static readonly i: (message: string, tag?: string) => void

    /**
     * Logs a warning message with an optional tag.
     * 
     * @param {string} message - The warning message to log.
     * @param {string} tag - An optional tag to include in the log message.
     */
    static readonly w: (message: string, tag?: string) => void

    /**
     * Logs an error message with an optional tag.
     * @param {string} message - The error message to log.
     * @param {string} tag - An optional tag to provide additional context for the error.
     */
    static readonly e: (message: string, tag?: string) => void

    /**
     * Logs a verbose message with an optional tag.
     * @param {string} message - The message to be logged.
     * @param {string} tag - An optional tag to provide additional context.
     */
    static readonly v: (message: string, tag?: string) => void

    /**
     * Logs a custom message with optional formatting options.
     * 
     * @param message - The message to log.
     * @param options - The formatting options for the log message.
     * @param options.tag - The tag to display before the message.
     * @param options.tagColor - The color of the tag.
     * @param options.tagIcon - The icon to display with the tag.
     * @param options.iconColor - The color of the tag icon.
     * @param options.messageColor - The color of the log message.
     */
    static readonly custom: (message: string, options: { tag?: string, tagColor?: Color, tagIcon?: string, iconColor?: Color, messageColor?: Color }) => void
  }
}