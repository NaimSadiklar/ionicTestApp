import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import {ApiProvider} from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any = [];
  private per_page:number = 5; 
  private page:number = 1;
  private category_id:number = 0;
  constructor(public navCtrl: NavController,public api:ApiProvider,public NavParms:NavParams, public http: HttpClient) {
    if(this.NavParms.get('cat_id') !=null && this.NavParms.get('cat_id') != undefined){
     this.category_id = this.NavParms.get('cat_id')
    }
    console.log(this.NavParms.get('cat_id'));
    this.getPosts();


  }

  getPosts(){
    
    this.api.get('posts?_embed&per_page='+this.per_page + '&page='+this.page + (this.category_id!=0 ? '&categories'+this.category_id:''))
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
