import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { GMapModule } from 'primeng/gmap';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { DateCompactPipe } from 'src/app/pipes/date-pipe/date-compact.pipe';
import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common.component';
import { PrebookingDemoComponent } from './component/prebooking-demo/prebooking-demo.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RoleGuard } from 'src/app/guards/role.guard';
import { JwtInterceptor } from 'src/app/interceptors/jwt/jwt.interceptor';
import { DateTimePipe } from 'src/app/pipes/date-pipe/date-time.pipe';
import { SafePipe } from 'src/app/safe.pipe';
import { CommonService } from 'src/app/services/apis/common.service';
import { ProductService } from 'src/app/services/apis/products.service';
import { BannerComponent } from './component/banner/banner.component';
import { BookOneComponent } from './component/book-one/book-one.component';
import { BookComponent } from './component/book/book.component';
import { CartComponent } from './component/cart/cart.component';
import { CostComponent } from './component/cost/cost.component';
import { DesignComponent } from './component/design/design.component';
import { FacebookChatComponent } from './component/facebook-chat/facebook-chat.component';
import { FilterProductComponent } from './component/filter-product/filter-product.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { MenuRightComponent } from './component/menu-right/menu-right.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { NewsComponent } from './component/news/news.component';
import { PerformanceComponent } from './component/performance/performance.component';
import { PrebookingComponent } from './component/prebooking/prebooking.component';
import { ProductsComponent } from './component/products/products.component';
import { PromotionListComponent } from './component/promotion-list/promotion-list.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { SafetyComponent } from './component/safety/safety.component';
import { TabsDetailProductComponent } from './component/tabs-detail-product/tabs-detail-product.component';
import { TechnologyComponent } from './component/technology/technology.component';
import { TitleContent } from './component/title-content/title-content.component';
import { FormDepositComponent } from './deposit/component/form-deposit/form-deposit.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { IframeVWComponent } from './products/iframe-vw/iframe-vw.component';
import { SketchFabComponent } from './products/model-view-sketchfab/sketchfab.component';
import { Product3DListComponent } from './products/product-3d-list/product-3d-list.component';
import { Product3DComponent } from './products/product-3d/product-3d.component';
import { ProductCompareComponent } from './products/product-compare/product-compare.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { TestDriveComponent } from './products/test-drive/test-drive.component';
import { SurveyComponent } from './survey/survey.component';
import { PanoeeComponent } from './vr-view/panoee/panoee.component';
import { VrToorComponent } from './vr-view/vr-toor/vr-toor.component';

import { PassatComponent } from './categorys/passat/passat.component';
import { PoloComponent } from './categorys/polo/polo.component';
import { TeramontComponent } from './categorys/teramont/teramont.component';
import { TiguanComponent } from './categorys/tiguan/tiguan.component';
import { LikeComponent } from './component/like/like.component';
import { OwnerAccessoryComponent } from './owner-page-hardcode/owner-accessory/owner-accessory.component';
import { OwnerAllComponent } from './owner-page-hardcode/owner-all/owner-all.component';
import { OwnerEngineComponent } from './owner-page-hardcode/owner-engine/owner-engine.component';
import { OwnerInformationComponent } from './owner-page-hardcode/owner-information/owner-information.component';
import { OwnerInsuranceComponent } from './owner-page-hardcode/owner-insurance/owner-insurance.component';
import { OwnerLifeStyleComponent } from './owner-page-hardcode/owner-lifestyle/owner-lifestyle.component';
import { OwnerPartComponent } from './owner-page-hardcode/owner-part/owner-part.component';
import { OwnerRepairServiceComponent } from './owner-page-hardcode/owner-repair-service/owner-repair-service.component';
import { OwnerTransportComponent } from './owner-page-hardcode/owner-transport/owner-transport.component';
import { OwnerWarningLightDetailComponent } from './owner-page-hardcode/owner-warning-light-detail/owner-warning-light-detail.component';
import { OwnerWarningLightComponent } from './owner-page-hardcode/owner-warning-light/owner-warning-light.component';
import { OwnerWheelComponent } from './owner-page-hardcode/owner-wheel/owner-wheel.component';
import { OwnerComponent } from './owner-page/owner/owner.component';
import { ServiceComponent } from './products/service/service.component';
import { OwnerBannerComponent } from './scaffold/owner-banner/owner-banner.component';
import { OwnerBanner2Component } from './scaffold/owner-banner2/owner-banner2.component';
import { OwnerMainTitleComponent } from './scaffold/owner-main-title/owner-main-title.component';
import { OwnerTitleComponent } from './scaffold/owner-title/owner-title.component';

import { CategoryBannerComponent } from './category-scaffold/category-banner/category-banner.component';
import { CategoryBrochureComponent } from './category-scaffold/category-brochure/category-brochure.component';
import { CategoryDetailElementComponent } from './category-scaffold/category-detail-element/category-detail-element.component';
import { CategoryDetailVersionsComponent } from './category-scaffold/category-detail-versions/category-detail-versions.component';
import { CategoryH1Component } from './category-scaffold/category-h1/category-h1.component';
import { CategoryMainTitleComponent } from './category-scaffold/category-main-title/category-main-title.component';
import { CategoryPhotoGalleryComponent } from './category-scaffold/category-photo-gallery/category-photo-gallery.component';
import { CategoryPrebookingComponent } from './category-scaffold/category-prebooking/category-prebooking.component';
import { CategoryReferenceComponent } from './category-scaffold/category-reference/category-reference.component';
import { CategorySpecialFeaturesV2Component } from './category-scaffold/category-special-features-v2/category-special-features-v2.component';
import { CategorySpecialFeaturesV3Component } from './category-scaffold/category-special-features-v3/category-special-features-v3.component';
import { CategorySpecialFeaturesComponent } from './category-scaffold/category-special-features/category-special-features.component';
import { CategorySummaryComponent } from './category-scaffold/category-summary/category-summary.component';
import { CategoryTabHorizontalGalleryComponent } from './category-scaffold/category-tab-horizontal-gallery/category-tab-horizontal-gallery.component';
import { CategoryTabHorizontalComponent } from './category-scaffold/category-tab-horizontal/category-tab-horizontal.component';
import { NewTiguanComponent } from './categorys/new-tiquan/newtiquan.component';
import { PassatV2Component } from './categorys/passat-v2/passat-v2.component';
import { PoloV2Component } from './categorys/polo-v2/polo-v2.component';
import { TcrossDemoComponent } from './categorys/tcross-demo/tcross-demo.component';
import { TcrossV2Component } from './categorys/tcross-v2/tcross-v2.component';
import { TcrossComponent } from './categorys/tcross/tcross.component';
import { TeramontV2Component } from './categorys/teramont-v2/teramont-v2.component';
import { TiguanV2Component } from './categorys/tiguan-v2/tiguan-v2.component';
import { TouaregComponent } from './categorys/touareg/touareg.component';
import { VirtusComponent } from './categorys/virtus/virtus.component';
import { ViloranComponent } from './categorys/viloran/viloran.component';
import { QrComponent } from './component/qr/qr.component';
import { DeliveryPolicyComponent } from './delivery-policy/deliveryPolicy.component';
import { InsurancePolicyComponent } from './insurance-policy/insurancePolicy.component';
import { PaymentPolicyComponent } from './payment-policy/paymentPolicy.component';
import { PrivacyPageComponent } from './privacy/privacy.component';
import { OwnerAccordionComponent } from './scaffold/owner-accordion/owner-accordion.component';
import { OwnerAccordion2Component } from './scaffold/owner-accordion2/owner-accordion2.component';
import { OwnerDetailHorizontalComponent } from './scaffold/owner-detail-horizontal/owner-detail-horizontal.component';
import { OwnerDetailVerticalComponent } from './scaffold/owner-detail-vertical/owner-detail-vertical.component';
import { OwnerDetailVertical2Component } from './scaffold/owner-detail-vertical2/owner-detail-vertical2.component';
import { OwnerImageComponent } from './scaffold/owner-image/owner-image.component';
import { OwnerLinkListComponent } from './scaffold/owner-link-list/owner-link-list.component';
import { OwnerListComponent } from './scaffold/owner-list/owner-list.component';
import { OwnerPComponent } from './scaffold/owner-p/owner-p.component';
import { OwnerPhotoGalleryComponent } from './scaffold/owner-photo-gallery/owner-photo-gallery.component';
import { OwnerReferenceComponent } from './scaffold/owner-reference/owner-reference.component';
import { OwnerTextInfoComponent } from './scaffold/owner-text-info/owner-text-info.component';
import { TermsPageComponent } from './Terms/terms.component';
import { UserInfoPolicyComponent } from './user-info-policy/userInfoPolicy.component';
import { TcrossDemo2Component } from './categorys/tcross-demo-2/tcross-demo-2.component';
import { PrebookingDemo2Component } from './component/prebooking-demo-2/prebooking-demo-2.component';
import { OwnerSummonComponent } from './owner-page-hardcode/owner-summon/owner-summon.component';
import { NewsRecallComponent } from './component/recall/news-recall.component';
import { TouaregEleganceComponent } from './categorys/touareg-elegance/touareg-elegance.component';
import { TouaregLuxuryComponent } from './categorys/touareg-luxury/touareg-luxury.component';
import { CategoryViloranSpecialFeaturesComponent } from './category-scaffold/category-viloran-special-features/category-viloran-special-features.component';
import { ViloranNewComponent } from './categorys/viloran-new/viloran-new.component';
import { ButtonComponent } from './component/button/button.component';
import { ProductBannerComponent } from './component/product-banner/product-banner.component';
import { ProductVersionDetailComponent } from './product-version-detail/product-version-detail.component';
import { TeramontXComponent } from './categorys/teramont-x/teramont-x.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    TieredMenuModule,
    ButtonModule,
    ChipsModule,
    AvatarModule,
    AvatarGroupModule,
    TieredMenuModule,
    SlideMenuModule,
    FormsModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    CommonRoutingModule,
    InputTextModule,
    TableModule,
    DividerModule,
    HttpClientModule,
    CascadeSelectModule,
    DialogModule,
    InputSwitchModule,
    CommonModule,
    InputTextareaModule,
    SelectButtonModule,
    PasswordModule,
    ConfirmDialogModule,
    CarouselModule,
    RadioButtonModule,
    AutoCompleteModule,
    TabViewModule,
    AccordionModule,
    GalleriaModule,
    ToastModule,
    MenuModule,
    FormsModule,
    InputMaskModule,
    CheckboxModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    SidebarModule,
    GMapModule,
    InputNumberModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    CommonComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    SurveyComponent,
    DepositComponent,
    FormDepositComponent,
    BannerComponent,
    PromotionComponent,
    TitleContent,
    ProductsComponent,
    DateCompactPipe,
    DateTimePipe,
    VrToorComponent,
    Product3DComponent,
    Product3DListComponent,
    ProductCompareComponent,
    TabsDetailProductComponent,
    PanoeeComponent,
    FilterProductComponent,
    GalleryComponent,
    DesignComponent,
    TechnologyComponent,
    PerformanceComponent,
    SafetyComponent,
    BookComponent,
    SketchFabComponent,
    SafePipe,
    IframeVWComponent,
    BookOneComponent,
    NewsComponent,
    NewsListComponent,
    PromotionListComponent,
    PrebookingComponent,
    CostComponent,
    TestDriveComponent,
    MenuRightComponent,
    FacebookChatComponent,
    CartComponent,
    ServiceComponent,
    TeramontComponent,
    TeramontXComponent,
    TiguanComponent,
    PassatComponent,
    PoloComponent,
    LikeComponent,
    OwnerComponent,
    OwnerAllComponent,
    OwnerRepairServiceComponent,
    OwnerInsuranceComponent,
    OwnerPartComponent,
    OwnerEngineComponent,
    OwnerBannerComponent,
    OwnerBanner2Component,
    OwnerMainTitleComponent,
    OwnerTitleComponent,
    OwnerWheelComponent,
    OwnerInformationComponent,
    OwnerAccessoryComponent,
    OwnerTransportComponent,
    OwnerLifeStyleComponent,
    OwnerWarningLightComponent,
    OwnerSummonComponent,
    NewsRecallComponent,
    OwnerWarningLightDetailComponent,
    OwnerDetailVerticalComponent,
    OwnerDetailHorizontalComponent,
    OwnerPhotoGalleryComponent,
    OwnerReferenceComponent,
    OwnerListComponent,
    OwnerPComponent,
    OwnerImageComponent,
    OwnerAccordionComponent,
    OwnerLinkListComponent,
    OwnerTextInfoComponent,
    TcrossComponent,
    CategoryBannerComponent,
    CategoryMainTitleComponent,
    CategorySummaryComponent,
    CategoryBrochureComponent,
    CategoryH1Component,
    CategorySpecialFeaturesComponent,
    CategoryViloranSpecialFeaturesComponent,
    CategoryTabHorizontalComponent,
    CategoryPhotoGalleryComponent,
    CategoryReferenceComponent,
    CategoryTabHorizontalGalleryComponent,
    PoloV2Component,
    PassatV2Component,
    TiguanV2Component,
    NewTiguanComponent,
    TeramontV2Component,
    TouaregComponent,
    VirtusComponent,
    ViloranComponent,
    ViloranNewComponent,
    ProductBannerComponent,
    ButtonComponent,
    TouaregEleganceComponent,
    TouaregLuxuryComponent,
    TcrossV2Component,
    CategorySpecialFeaturesV2Component,
    CategorySpecialFeaturesV3Component,
    CategoryPrebookingComponent,
    CategoryDetailElementComponent,
    CategoryDetailVersionsComponent,
    OwnerDetailVertical2Component,
    OwnerAccordion2Component,
    TermsPageComponent,
    PrivacyPageComponent,
    UserInfoPolicyComponent,
    DeliveryPolicyComponent,
    InsurancePolicyComponent,
    PaymentPolicyComponent,
    QrComponent,
    TcrossDemoComponent,
    PrebookingDemoComponent,
    ProductVersionDetailComponent,

    TcrossDemo2Component,
    PrebookingDemo2Component,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ProductService,
    RoleGuard,
    CommonService,
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
})
export class CustomCommonModule {}
