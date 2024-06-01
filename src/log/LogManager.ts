import { Color } from '../types/Color'
import formatTimestamp from '../helper/timestamp'
import EnumColor from '../helper/EnumColor'

/**
 * The `LogManager` class provides static methods for logging messages with different log levels.
 * @constructor
 */
export default class LogManager {
  message: string

  constructor(message: string) {
    this.message = message
  }

  /**
   * Logs a debug message with an optional tag.
   * 
   * @param {string} message  - The debug message to log.
   * @param {string} tag - An optional tag to include in the log message.
   */
  static readonly debug = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, green, whiteOnGreen } = EnumColor

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnGreen} D ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${green}:: ${tag} :: ${whiteOnGreen} D ${base} => ${message}\n`
    }
    console.log(message)
  }

  /**
   * Logs an informational message.
   * 
   * @param {string} message - The message to log.
   * @param {string} tag - An optional tag for the log message.
   */
  static readonly info = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, blue, whiteOnBlue } = EnumColor

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnBlue} I ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${blue}:: ${tag} :: ${whiteOnBlue} I ${base} => ${message}\n`
    }
    console.log(message)
  }

  /**
   * Logs a warning message with an optional tag.
   * 
   * @param {string} message - The warning message to log.
   * @param {string} tag - An optional tag to include in the log message.
   */
  static readonly warn = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, yellow, whiteOnYellow } = EnumColor

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnYellow} W ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${yellow}:: ${tag} :: ${whiteOnYellow} W ${base} => ${message}\n`
    }
    console.log(message)
  }

  /**
   * Logs an error message with an optional tag.
   * @param {string} message - The error message to log.
   * @param {string} tag - An optional tag to provide additional context for the error.
   */
  static readonly error = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, red, whiteOnRed } = EnumColor

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnRed} E ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${red}:: ${tag} :: ${whiteOnRed} E ${base} => ${message}\n`
    }
    console.log(message)
    throw new Error(message)
  }

  /**
   * Logs a verbose message with an optional tag.
   * @param {string} message - The message to be logged.
   * @param {string} tag - An optional tag to provide additional context.
   */
  static readonly verbose = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, blackOnWhite } = EnumColor

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${blackOnWhite} V ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${base}:: ${tag} :: ${blackOnWhite} V ${base} => ${message}\n`
    }
    console.log(message)
  }


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
  static readonly custom = (message: string, options?: {tag?: string, tagColor?: Color, tagIcon?: string, iconColor?: Color, messageColor?: Color}): void => {
    options = options || {}
    const timestamp = formatTimestamp(new Date())
    const { cyan, base } = EnumColor
    
    options.tag = !options.tag ? '' : ` :: ${options.tag} :: `
    options.tagColor = !options.tagColor? 'base' : options.tagColor
    options.tagIcon = !options.tagIcon ? '' : ` ${options.tagIcon} `
    options.iconColor = !options.iconColor ? 'base' : options.iconColor
    options.messageColor = !options.messageColor ? 'base' : options.messageColor

    const tagColorValue = EnumColor[options.tagColor]
    const messageColorValue = EnumColor[options.messageColor]
    const iconColorValue = EnumColor[options.iconColor]

    message = `${cyan}[ ${timestamp} ]${tagColorValue}${options.tag}${iconColorValue}${options.tagIcon}${base}${messageColorValue} => ${message}${base}\n`
    console.log(message)
  }
}