import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {HttpClient} from "@angular/common/http";
import {DetailPage} from "../detail/detail";


/**
 * Generated class for the SportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html',
})
export class SportPage {
  public items:any = [];
  private per_page:number = 5;
  private page:number = 1;

  constructor(public navCtrl: NavController,public api:ApiProvider,public NavParms:NavParams, public http: HttpClient) {


    this.getPostsSport();


  }


  getPostsSport(){

    this.api.get('posts?categories=46&per_page='+this.per_page + '&page='+this.page)
      .subscribe((data) => {
        this.items = this.items.concat(data);
        this.page++;
      });
  }

  openDetail(item){
    this.navCtrl.push(DetailPage, {post:item})
  }

  itemClick(itemid:number){

  }

}
