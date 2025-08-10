import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  archive,
  archiveOutline,
  bookmark,
  bookmarkOutline,
  heart,
  heartOutline,
  mail,
  mailOutline,
  paperPlane,
  paperPlaneOutline,
  trash,
  trashOutline,
  warning,
  warningOutline
} from 'ionicons/icons';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

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
  'bookmark-outline': bookmarkOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideIonicAngular()
  ]
}).catch(err => console.log(err));
