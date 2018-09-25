import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreamPage } from './stream';
import { HttpClientModule } from '@angular/common/http';
import { Media } from '@ionic-native/media';
import { MediaStreamServiceProvider } from '../../providers/media-stream-service/media-stream-service';

@NgModule({
  declarations: [
    StreamPage
  ],
  imports: [
    IonicPageModule.forChild(StreamPage),
    HttpClientModule
  ],
  providers:[Media,MediaStreamServiceProvider]
})
export class GenreBrowserPageModule {}