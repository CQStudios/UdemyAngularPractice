import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = '';
  inputServerName = '';
  serverCreated = false;
  servers = ['Testserver','Testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverName = this.inputServerName;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created: ' + this.serverName;
    }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  log = [];
  onToggle() {
    this.log.push(new Date());
    console.log(this.log);
  }

}
