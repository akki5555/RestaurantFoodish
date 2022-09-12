import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',redirectTo: 'signin', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verificaion',
    loadChildren: () => import('./verificaion/verificaion.module').then( m => m.VerificaionPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'order-info',
    loadChildren: () => import('./order-info/order-info.module').then( m => m.OrderInfoPageModule)
  },
  {
    path: 'order-info-ready',
    loadChildren: () => import('./order-info-ready/order-info-ready.module').then( m => m.OrderInfoReadyPageModule)
  },
  {
    path: 'deliveryman-info',
    loadChildren: () => import('./deliveryman-info/deliveryman-info.module').then( m => m.DeliverymanInfoPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'item-info',
    loadChildren: () => import('./item-info/item-info.module').then( m => m.ItemInfoPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'restro-profile',
    loadChildren: () => import('./restro-profile/restro-profile.module').then( m => m.RestroProfilePageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'send-to-bank',
    loadChildren: () => import('./send-to-bank/send-to-bank.module').then( m => m.SendToBankPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'add-items',
    loadChildren: () => import('./add-items/add-items.module').then( m => m.AddItemsPageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule)
  },  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
