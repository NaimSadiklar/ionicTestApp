import {StreamingMedia, StreamingVideoOptions ,StreamingAudioOptions } from '@ionic-native/streaming-media'
import { Component } from '@angular/core';


/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
})
export class StreamPage {

  constructor(private streamingMedia:StreamingMedia) {
  }

  startVideo(){
    let options: StreamingVideoOptions= {
      successCallback:  () =>{console.log()},
      errorCallback:  () =>{console.log()},
      orientation:'portrait'
    }

    this.streamingMedia.playVideo('https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',options);
  }

  startAudio(){
    let options: StreamingAudioOptions= {
      successCallback:  () =>{console.log()},
      errorCallback:  () =>{console.log()},
      initFullscreen:false,
    }
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2208&type=mp3',options);

  }
  stopAudio(){
    this.streamingMedia.stopAudio();
  }

}
