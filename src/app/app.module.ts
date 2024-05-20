import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { SpinnerComponent } from 'src/app/sharedComponent/spinner/spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DateCompactPipe } from './pipes/date-pipe/date-compact.pipe';
import { DateTimePipe } from './pipes/date-pipe/date-time.pipe';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt/jwt.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ViewerLayout } from './layouts/viewer-layout/viewer-layout.component';
import { AdminLayout } from './layouts/admin-layout/admin-layout.component';
import { ViewerLayoutWithoutNavbarComponent } from './layouts/viewer-layout-without-navbar/viewer-layout-without-navbar.component';
import { ViewerLayoutWithNavbarBlueComponent } from './layouts/viewer-layout-with-navbar-blue/viewer-layout-with-navbar-blue.component';
import { ViewerLayoutWithoutSocialComponent } from './layouts/viewer-layout-without-social/viewer-layout-without-social.component';
import { ViewerLayoutEmptyComponent } from './layouts/viewer-layout-empty/viewer-layout-empty.component';
import { ViewerLayoutWidthNavbarBlueHiddenBellowComponent } from './layouts/viewer-layout-width-navbar-blue-hidden-bellow/viewer-layout-width-navbar-blue-hidden-bellow.component';
import { ViewerLayoutWidthNavbarWhiteHiddenBellowComponent } from './layouts/viewer-layout-width-navbar-white-hidden-bellow/viewer-layout-width-navbar-white-hidden-bellow.component';
import { ViewerLayoutAd } from 'src/app/layouts/view-layout-ad/viewer-layout-ad.component';
import { FacebookModule } from 'ngx-facebook';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, SpinnerComponent, BreadcrumbComponent, NavbarComponent, FooterComponent, ViewerLayout, AdminLayout, ViewerLayoutWithoutNavbarComponent, ViewerLayoutWithNavbarBlueComponent, ViewerLayoutWithoutSocialComponent, ViewerLayoutEmptyComponent, ViewerLayoutWidthNavbarBlueHiddenBellowComponent, ViewerLayoutWidthNavbarWhiteHiddenBellowComponent, ViewerLayoutAd],
  imports: [
    FacebookModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
