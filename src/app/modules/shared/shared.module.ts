import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule, IonicModule],
    exports: [HeaderComponent, FooterComponent],
})

export class SharedModule { }
