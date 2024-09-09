import { isPlatformBrowser } from '@angular/common';
import { ErrorHandler, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { SentryConfig } from 'src/config.sentry';

@Injectable()
export class ErrorLogger implements ErrorHandler {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      Sentry.init(SentryConfig);
    }
  }

  handleError(error: any): void {
    if (isPlatformBrowser(this.platformId)) {
      const eventId = Sentry.captureException(error.originalError || error);
      Sentry.showReportDialog({ eventId });
    }
  }
}
