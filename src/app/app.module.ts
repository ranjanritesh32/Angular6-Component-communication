import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { FooterComponent } from "./component/footer/footer.component";
import { ContentComponent } from "./component/content/content.component";
import { HeaderComponent } from "./component/header/header.component";
import { MessageComponent } from "./component/message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MessageComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
