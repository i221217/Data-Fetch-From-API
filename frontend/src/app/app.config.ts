import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // <-- Add this
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideHttpClient() // <-- Add this
  ]
};