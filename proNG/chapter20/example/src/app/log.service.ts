import { Injectable, InjectionToken } from '@angular/core';

export const LOG_SERVICE = new InjectionToken<string>('logger');

export enum LogLevel {
  DEBUG, INFO, ERROR
}

@Injectable()
export class LogService {
  minimumLevel: LogLevel = LogLevel.INFO;

  logInfoMessage(message: string): void {
    this.logMessage(LogLevel.INFO, message);
  }

  logDebugMessage(message: string): void {
    this.logMessage(LogLevel.DEBUG, message);
  }

  logErrorMessage(message: string): void {
    this.logMessage(LogLevel.ERROR, message);
  }

  logMessage(level: LogLevel, message: string): void {
    if(level >= this.minimumLevel) {
      console.log(`Message: (${LogLevel[level]}): ${message}`);
    }
  }
}