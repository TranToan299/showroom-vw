import { ProductDetailComponent } from './product-detail/product-detail.component';
import { VrToorComponent } from './vr-view/vr-toor/vr-toor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common.component';
import { RoleGuard } from 'src/app/guards/role.guard';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { ProductListComponent } from './products/product-list/product-list.component';
// import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCompareComponent } from './products/product-compare/product-compare.component';
import { ViewerLayout } from 'src/app/layouts/viewer-layout/viewer-layout.component';
import { ViewerLayoutAd } from 'src/app/layouts/view-layout-ad/viewer-layout-ad.component';
import { ViewerLayoutWithoutNavbarComponent } from './../../layouts/viewer-layout-without-navbar/viewer-layout-without-navbar.component';
import { ViewerLayoutWithNavbarBlueComponent } from 'src/app/layouts/viewer-layout-with-navbar-blue/viewer-layout-with-navbar-blue.component';
import { ViewerLayoutEmptyComponent } from 'src/app/layouts/viewer-layout-empty/viewer-layout-empty.component';
import { ViewerLayoutWidthNavbarBlueHiddenBellowComponent } from 'src/app/layouts/viewer-layout-width-navbar-blue-hidden-bellow/viewer-layout-width-navbar-blue-hidden-bellow.component';
import { ViewerLayoutWidthNavbarWhiteHiddenBellowComponent } from 'src/app/layouts/viewer-layout-width-navbar-white-hidden-bellow/viewer-layout-width-navbar-white-hidden-bellow.component';

import { DepositComponent } from './deposit/deposit.component';
import { Product3DComponent } from './products/product-3d/product-3d.component';
import { Product3DListComponent } from './products/product-3d-list/product-3d-list.component';
import { PanoeeComponent } from './vr-view/panoee/panoee.component';
import { BookComponent } from './component/book/book.component';
import { SketchFabComponent } from './products/model-view-sketchfab/sketchfab.component';
import { IframeVWComponent } from './products/iframe-vw/iframe-vw.component';
import { BookOneComponent } from './component/book-one/book-one.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { PromotionListComponent } from './component/promotion-list/promotion-list.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { NewsComponent } from './component/news/news.component';
import { PrebookingComponent } from './component/prebooking/prebooking.component';
import { CostComponent } from './component/cost/cost.component';
import { TestDriveComponent } from './products/test-drive/test-drive.component';
import { ServiceComponent } from './products/service/service.component';
// owner-page
import { OwnerComponent } from './owner-page/owner/owner.component';
import { OwnerAllComponent } from './owner-page-hardcode/owner-all/owner-all.component';
import { OwnerRepairServiceComponent } from './owner-page-hardcode/owner-repair-service/owner-repair-service.component';
import { OwnerInsuranceComponent } from './owner-page-hardcode/owner-insurance/owner-insurance.component';
import { OwnerPartComponent } from './owner-page-hardcode/owner-part/owner-part.component';
import { OwnerEngineComponent } from './owner-page-hardcode/owner-engine/owner-engine.component';
import { OwnerWheelComponent } from './owner-page-hardcode/owner-wheel/owner-wheel.component';
import { OwnerInformationComponent } from './owner-page-hardcode/owner-information/owner-information.component';
import { OwnerAccessoryComponent } from './owner-page-hardcode/owner-accessory/owner-accessory.component';
import { OwnerTransportComponent } from './owner-page-hardcode/owner-transport/owner-transport.component';
import { OwnerLifeStyleComponent } from './owner-page-hardcode/owner-lifestyle/owner-lifestyle.component';
import { OwnerWarningLightComponent } from './owner-page-hardcode/owner-warning-light/owner-warning-light.component';
import { OwnerWarningLightDetailComponent } from './owner-page-hardcode/owner-warning-light-detail/owner-warning-light-detail.component';

// cate-page
import { TeramontComponent } from './categorys/teramont/teramont.component';
import { TiguanComponent } from './categorys/tiguan/tiguan.component';
import { PassatComponent } from './categorys/passat/passat.component';
import { PoloComponent } from './categorys/polo/polo.component';
import { TcrossComponent } from './categorys/tcross/tcross.component';
import { PoloV2Component } from './categorys/polo-v2/polo-v2.component';
import { PassatV2Component } from './categorys/passat-v2/passat-v2.component';
import { TiguanV2Component } from './categorys/tiguan-v2/tiguan-v2.component';
import { NewTiguanComponent } from './categorys/new-tiquan/newtiquan.component';
import { TeramontV2Component } from './categorys/teramont-v2/teramont-v2.component';
import { TcrossV2Component } from './categorys/tcross-v2/tcross-v2.component';
import { TouaregComponent } from './categorys/touareg/touareg.component';
import { VirtusComponent } from './categorys/virtus/virtus.component';
import { ViloranComponent } from './categorys/viloran/viloran.component';
//terms page
import { TermsPageComponent } from './Terms/terms.component';
import { PrivacyPageComponent } from './privacy/privacy.component';
import { UserInfoPolicyComponent } from './user-info-policy/userInfoPolicy.component';
import { DeliveryPolicyComponent } from './delivery-policy/deliveryPolicy.component';
import { InsurancePolicyComponent } from './insurance-policy/insurancePolicy.component';
import { PaymentPolicyComponent } from './payment-policy/paymentPolicy.component';
import { TcrossDemoComponent } from './categorys/tcross-demo/tcross-demo.component';
import { PrebookingDemoComponent } from './component/prebooking-demo/prebooking-demo.component';
import { PrebookingDemo2Component } from './component/prebooking-demo-2/prebooking-demo-2.component';
import { TcrossDemo2Component } from './categorys/tcross-demo-2/tcross-demo-2.component';
import { OwnerSummonComponent } from './owner-page-hardcode/owner-summon/owner-summon.component';
import { NewsRecallComponent } from './component/recall/news-recall.component';
import { TouaregEleganceComponent } from './categorys/touareg-elegance/touareg-elegance.component';
import { TouaregLuxuryComponent } from './categorys/touareg-luxury/touareg-luxury.component';
import { ViloranNewComponent } from './categorys/viloran-new/viloran-new.component';
import { TeramontXComponent } from './categorys/teramont-x/teramont-x.component';

const routes: Routes = [
  {
    path: 'legal',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: TermsPageComponent,
      },
      // {
      //     path: 'privacy-policy',
      //     component: PrivacyPageComponent,
      // },
      // {
      //     path: 'user-policy',
      //     component: UserInfoPolicyComponent,
      // },
      // {
      //     path: 'delivery-policy',
      //     component: DeliveryPolicyComponent,
      // },
      // {
      //     path: 'insurance-policy',
      //     component: InsurancePolicyComponent,
      // },
      // {
      //     path: 'payment-policy',
      //     component: PaymentPolicyComponent,
      // },
    ],
  },
  {
    path: 'privacy-policy',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: PrivacyPageComponent,
      },
    ],
  },
  {
    path: 'user-policy',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: UserInfoPolicyComponent,
      },
    ],
  },
  {
    path: 'delivery-policy',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: DeliveryPolicyComponent,
      },
    ],
  },
  {
    path: 'insurance-policy',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: InsurancePolicyComponent,
      },
    ],
  },
  {
    path: 'payment-policy',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: PaymentPolicyComponent,
      },
    ],
  },
  {
    path: '',
    component: ViewerLayoutWidthNavbarBlueHiddenBellowComponent,
    children: [
      {
        path: 'teramont',
        component: TeramontComponent,
      },
      {
        path: 'ex-tiguan',
        component: TiguanComponent,
      },
      {
        path: 'ex-passat',
        component: PassatComponent,
      },
      {
        path: 'ex-polo',
        component: PoloComponent,
      },
      {
        path: 'ex-tcross',
        component: TcrossComponent,
      },
      {
        path: 'polo',
        component: PoloV2Component,
      },
      {
        path: 'tiguanallspace',
        component: TiguanV2Component,
      },
      {
        path: 'passat',
        component: PassatV2Component,
      },
      {
        path: 'teramont-v2',
        component: TeramontV2Component,
      },
      {
        path: 'teramont_x',
        component: TeramontXComponent,
      },
      {
        path: 'tcross',
        component: TcrossV2Component,
      },
      {
        path: 'tcross-demo',
        component: TcrossDemoComponent,
      },
      {
        path: 'tcross-demo2',
        component: TcrossDemo2Component,
      },
      {
        path: 'touareg',
        component: TouaregComponent,
      },
      {
        path: 'virtus',
        component: VirtusComponent,
      },

      {
        path: 'touareg-elegance',
        component: TouaregEleganceComponent,
      },
      {
        path: 'touareg-luxury',
        component: TouaregLuxuryComponent,
      },
      {
        path: 'tiguan',
        component: NewTiguanComponent,
      },
      {
        path: 'viloran',
        component: ViloranComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/homepage',
      },
    ],
  },
  {
    path: 'homepage',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'viloran-new',
        component: ViloranNewComponent,
      },
    ],
  },
  {
    path: 'kskh',
    component: ViewerLayoutAd,
    children: [
      {
        path: '',
        component: SurveyComponent,
      },
    ],
  },
  {
    path: 'product',
    component: ViewerLayoutWidthNavbarWhiteHiddenBellowComponent,
    children: [
      {
        path: 'teramont',
        component: TeramontComponent,
      },
      {
        path: 'teramont_x',
        component: TeramontXComponent,
      },
      {
        path: 'viloran',
        component: ViloranNewComponent,
      },
      {
        path: 'tiguanallspace',
        component: TiguanV2Component,
      },
      {
        path: 'tiguan',
        component: NewTiguanComponent,
      },
      {
        path: 'passat',
        component: PassatV2Component,
      },
      {
        path: 'polo',
        component: PoloV2Component,
      },
      {
        path: 'tcross',
        component: TcrossV2Component,
      },
      {
        path: 'touareg',
        component: TouaregComponent,
      },
      {
        path: 'virtus',
        component: VirtusComponent,
      },
      {
        path: 'touareg-elegance',
        component: TouaregEleganceComponent,
      },
      {
        path: 'touareg-luxury',
        component: TouaregLuxuryComponent,
      },
      {
        path: 'viloran',
        component: ViloranComponent,
      },
      
    ],
  },
  {
    path: 'vr-view',
    component: PanoeeComponent,
  },
  {
    path: 'product',
    component: ViewerLayoutWithNavbarBlueComponent,
    children: [
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'deposit',
        component: BookComponent,
      },
      {
        path: 'compare',
        component: ProductCompareComponent,
      },
      {
        path: 'cost',
        component: CostComponent,
      },
      {
        path: 'test-drive',
        component: TestDriveComponent,
      },
    ],
  },
  {
    path: 'tcross',
    component: ViewerLayout,
    children: [
      {
        path: 'booking',
        component: PrebookingComponent,
      },
    ],
  },
  {
    path: 'tcross-demo',
    component: ViewerLayout,
    children: [
      {
        path: 'booking',
        component: PrebookingDemoComponent,
      },
    ],
  },
  {
    path: 'tcross-demo2',
    component: ViewerLayout,
    children: [
      {
        path: 'booking',
        component: PrebookingDemo2Component,
      },
    ],
  },
  {
    path: ':product/deposit',
    component: ViewerLayoutWithNavbarBlueComponent,
    children: [
      {
        path: '',
        component: BookOneComponent,
      },
    ],
  },
  {
    path: ':product/prebooking',
    component: ViewerLayoutWidthNavbarWhiteHiddenBellowComponent,
    children: [
      {
        path: '',
        component: BookOneComponent,
      },
    ],
  },
  {
    path: 'vr-showroom/:product/deposit',
    component: ViewerLayoutEmptyComponent,
    children: [
      {
        path: '',
        component: BookOneComponent,
      },
    ],
  },
  {
    path: 'vr-showroom/:product/prebooking',
    component: ViewerLayoutEmptyComponent,
    children: [
      {
        path: '',
        component: BookOneComponent,
      },
    ],
  },
  {
    path: 'news',
    component: ViewerLayoutWithNavbarBlueComponent,
    children: [
      {
        path: 'page/:pageIndex',
        component: NewsListComponent,
      },
      {
        path: ':newsId',
        component: NewsComponent,
      },
      {
        path: '',
        redirectTo: '/news/page/1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'promotion',
    component: ViewerLayoutWithNavbarBlueComponent,
    children: [
      {
        path: '',
        component: PromotionComponent,
      },
    ],
  },
  {
    path: 'promotion.',
    component: ViewerLayoutWithNavbarBlueComponent,
    children: [
      {
        path: '',
        component: PromotionComponent,
      },
    ],
  },
  {
    path: '3d',
    component: ViewerLayoutWithoutNavbarComponent,
    children: [
      {
        path: '',
        component: Product3DListComponent,
      },
      {
        path: ':car',
        component: Product3DComponent,
      },
    ],
  },
  {
    path: '3d-viewer',
    component: IframeVWComponent,
  },
  {
    path: 'deposit',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: DepositComponent,
      },
    ],
  },
  {
    path: 'owner',
    component: ViewerLayout,
    children: [
      {
        path: '',
        component: OwnerAllComponent,
      },
      {
        path: 'dich-vu',
        component: OwnerRepairServiceComponent,
      },
      {
        path: 'bao-hanh',
        component: OwnerInsuranceComponent,
      },
      {
        path: 'phu-tung',
        component: OwnerPartComponent,
      },
      {
        path: 'dong-co',
        component: OwnerEngineComponent,
      },
      {
        path: 'mam-va-lop',
        component: OwnerWheelComponent,
      },
      {
        path: 'thong-tin',
        component: OwnerInformationComponent,
      },
      {
        path: 'phu-kien',
        component: OwnerAccessoryComponent,
      },
      {
        path: 'chuyen-cho',
        component: OwnerTransportComponent,
      },
      {
        path: 'phong-cach-song',
        component: OwnerLifeStyleComponent,
      },
      {
        path: 'warning-light',
        // component: OwnerWarningLightComponent,
        children: [
          { path: ':slug', component: OwnerWarningLightDetailComponent },
          { path: '**', component: OwnerWarningLightComponent },
        ],
      },
      {
        path: 'recall',
        // component: OwnerSummonComponent,
        children: [
          { path: ':slug', component: NewsRecallComponent },
          { path: '**', component: OwnerSummonComponent },
        ],
      },
      // {
      //     path: 'den-bao/*',
      //     component: OwnerWarningLightDetailComponent,
      // },
    ],
  },
  {},

  {
    path: '**',
    redirectTo: '/homepage',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
