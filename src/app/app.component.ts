import { Component, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  info: string = '';
  showInfo: boolean = false;
  dadoSalvo: string = '';

  constructor(
    @Inject(SESSION_STORAGE) private storageService: StorageService
  ) { }

  salvarDado(): void {
    this.storageService.set('StorageData', this.info)

  }

  buscarDado(): void {
    if (this.storageService.has('StorageData')) {
      this.dadoSalvo = this.storageService.get('StorageData')
      this.showInfo = true
    }
    else
      alert('Valor não Encontrado')

  }

  deletarDado(): void {
    this.storageService.remove('StorageData')
    this.showInfo = false
    this.dadoSalvo = ''

  }
}
