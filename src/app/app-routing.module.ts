import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'quoteslist', loadChildren: () => import('./modules/allquotes/allquotes.module').then(m => m.AllquotesModule) },
  { path: '', loadChildren: () => import('./modules/staticone/staticone.module').then(m => m.StaticoneModule) },
  { path: 'getstarted', loadChildren: () => import('./modules/statictwo/statictwo.module').then(m => m.StatictwoModule) },
  { path: 'quotes', loadChildren: () => import('./modules/fullscreenquote/fullscreenquote.module').then(m => m.FullscreenquoteModule) },
  { path: 'authorslist', loadChildren: () => import('./modules/allauthors/allauthors.module').then(m => m.AllauthorsModule) },
  { path: 'quotesbyauthor', loadChildren: () => import('./modules/quotesbyauthor/quotesbyauthor.module').then(m => m.QuotesbyauthorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
