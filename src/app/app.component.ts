import { Component, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  info: string = "";
  show: boolean = false;
  dadoSalvo: string = "";

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  salvarDado(): void {

  }

  buscarDado(): void {

  }

  deletarDado(): void {

  }
}
