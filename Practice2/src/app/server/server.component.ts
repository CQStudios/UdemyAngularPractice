import {Component} from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverID : number = 10;
  serverStatus : string = 'Unavailable';

  constructor(){
    this.serverStatus =  Math.random() > 0.5 ? "online":"offline";
  }
  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    // the return has to be encapsulated in single quotes to be processed as an HTML/CSS function
    return this.serverStatus === "online" ? 'rgba(100,255,100,1)' :'rgba(255,100,100,1)';
  }
}
