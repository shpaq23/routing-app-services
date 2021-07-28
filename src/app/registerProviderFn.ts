import { Provider } from '@angular/core';
import { ProvidersStore } from 'src/app/ProvidersStore';

export function registerProvider(provider: Provider): Provider {
  ProvidersStore.PROVIDERS.push(provider);
  return provider;
}
