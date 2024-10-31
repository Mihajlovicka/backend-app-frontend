import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from '../shared/popup/popup.component';
import { HttpResponseInterceptor } from './interceptors/http.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    UserService,
    PopupComponent,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true,
    },
  ],
  exports: [MaterialModule, HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class CoreModule {}
