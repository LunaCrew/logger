# Logger

This Logger package is a utility for logging messages in your application. It provides a simple and flexible way to record important events, errors, and debugging information.

<p align="center">
  <img alt="License MIT" src="https://img.shields.io/github/license/lunacrew/logger?logo=github&labelColor=181717">
  <img src="https://img.shields.io/github/actions/workflow/status/lunacrew/logger/coverage.yml?logo=jest&logoColor=C21325&label=tests&labelColor=181717" alt="Tests Status" />
  <br>
  <img src="https://img.shields.io/npm/v/%40lunacrew%2Flogger?label=version&logo=npm&labelColor=181717" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/%40lunacrew%2Flogger?logo=npm&labelColor=181717&color=blue" alt="NPM Downloads" />
  <img alt="NPM Type Definitions" src="https://img.shields.io/npm/types/%40lunacrew%2Flogger?logo=npm&labelColor=181717">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@lunacrew/logger" target="_blank">
    <img alt="npm install @lunacrew/logger" src="https://nodei.co/npm/@lunacrew/logger.png">
  </a>
</p>

## Usage

To use the Logger package in your project, follow these steps:

### Installation

  ```bash
  npm install @lunacrew/logger
  ```

Import the Log module into your code:

  ```js
  // CommonJS
  const Log = require('@lunacrew/logger')

  // ES6
  import Log from '@lunacrew/logger'
  ```

### Logging

  ```ts
  /**
  * @required {string} message - data to be logged.
  * @optional {string} tag - use to help identify the source of the log message.
  */

  Log.d(message: string, tag: string); // Debug log
  Log.i(message: string, tag: string); // Info log
  Log.w(message: string, tag: string); // Warning log
  Log.e(message: string, tag: string); // Error log
  Log.v(message: string, tag: string); // Verbose log  
  ```

### Custom Log Format

```ts
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

Log.custom(message: string, options: {
  tag?: string,
  tagColor?: string,
  tagIcon?: string,
  iconColor?: string,
  messageColor?: string
});
```
