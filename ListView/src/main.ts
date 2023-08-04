import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCdkx0QXxbf1xzZFBMZF1bRHVPMyBoS35RdUVkW3pedXBQRWBeU0J0'
);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
