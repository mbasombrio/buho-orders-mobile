import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  archive,
  archiveOutline,
  bookmark,
  bookmarkOutline,
  businessOutline,
  heart,
  heartOutline,
  lockClosedOutline,
  logOutOutline,
  logOutSharp,
  mail,
  mailOutline,
  paperPlane,
  paperPlaneOutline,
  personOutline,
  trash,
  trashOutline,
  warning,
  warningOutline
} from 'ionicons/icons';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/interceptors/auth.interceptor';

// Registrar iconos
addIcons({
  'mail': mail,
  'mail-outline': mailOutline,
  'paper-plane': paperPlane,
  'paper-plane-outline': paperPlaneOutline,
  'heart': heart,
  'heart-outline': heartOutline,
  'archive': archive,
  'archive-outline': archiveOutline,
  'trash': trash,
  'trash-outline': trashOutline,
  'warning': warning,
  'warning-outline': warningOutline,
  'bookmark': bookmark,
  'bookmark-outline': bookmarkOutline,
  'business-outline': businessOutline,
  'person-outline': personOutline,
  'lock-closed-outline': lockClosedOutline,
  'log-out-outline': logOutOutline,
  'log-out-sharp': logOutSharp
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideIonicAngular(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}).catch(err => console.log(err));
