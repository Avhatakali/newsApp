import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import newsArr from '../../app/newsArr';
import { news } from '../../app/news';
import arrSports from '../../app/arrSports';
import arrFind from '../../app/arrayLocate';


/**
 * Generated class for the NewsReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-reader',
  templateUrl: 'news-reader.html',
})
export class NewsReaderPage {

  u;
  sports;
  img;
  dt;
  title;
  text;
  date;
  description;
  url;
  newsArr = [];
  index;
  Arr = newsArr;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private NewsProvider:NewsProvider) { 
      this.u = this.navParams.get('obj');
      console.log(this.u);
      

      this.NewsProvider.getMessages(this.newsArr).then((data: any) => {

        console.log(data);
        console.log(arrFind);
        this.dt = data.articles;
    
        this.img = this.dt[this.u].urlToImage;
        this.text = this.dt[this.u].title;
        this.date = this.dt[this.u].publishedAt;
        this.description = this.dt[this.u].description;
        console.log(this.text+" "+this.img);
         });      
        
     }

     
    ionViewLoad(){
      
        }
    }

