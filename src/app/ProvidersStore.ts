import { Injectable, Injector, Provider } from '@angular/core';

@Injectable()
export class ProvidersStore {

  static readonly PROVIDERS: Array<Provider> = [];

  constructor(private readonly injector: Injector) {
    console.log('ProvidersStore - constructor');
  }

  logProviders(): void {
    console.log(ProvidersStore.PROVIDERS);
  }

  destroyServices(): void {
    const a = this.injector.get(ProvidersStore);
    const length = ProvidersStore.PROVIDERS.length;
    for (let i = 0; i < length; i++) {
      const provider = ProvidersStore.PROVIDERS.pop();
      const service = this.injector.get(provider);
      if (service.ngOnDestroy) {
        service.ngOnDestroy();
      }
      console.log(service);
    }
  }


}
