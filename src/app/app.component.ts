import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  list:any[]=[]
  gettask(item:string){
    this.list.push({id:this.list.length+1,name:item})
    console.log(this.list);
  }
  removeitem(id:number){
    
    this.list=this.list.filter(item=>item.id!==id)
  }
}
