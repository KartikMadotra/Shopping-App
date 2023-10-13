import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { InnerContainerComponent } from './body/inner-container/inner-container.component';
import { ProductImgeComponent } from './body/inner-container/product-imge/product-imge.component';
import { ProductTextComponent } from './body/inner-container/product-text/product-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    InnerContainerComponent,
    ProductImgeComponent,
    ProductTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
