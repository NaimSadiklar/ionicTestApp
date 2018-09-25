import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import {ApiProvider} from '../../providers/api/api';

/**
 * Generated class for the EconomyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-economy',
  templateUrl: 'economy.html',
})
export class EconomyPage {
  public items:any = [];
  private per_page:number = 5; 
  private page:number = 1;

  constructor(public navCtrl: NavController,public api:ApiProvider,public NavParms:NavParams, public http: HttpClient) {


    this.getPostsEconomy();


  }

  
  getPostsEconomy(){
    
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
