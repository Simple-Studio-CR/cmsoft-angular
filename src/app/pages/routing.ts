import {Routes} from '@angular/router';

const Routing: Routes = [
  {
    path: 'issuing',
    loadChildren: () =>
      import('./issuing/issuing.module').then((m) => m.IssuingModule),
  },
  {
    path: 'branch',
    loadChildren: () =>
      import('./branch/branch.module').then((m) => m.BranchModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'providers',
    loadChildren: () =>
      import('./providers/providers.module').then((m) => m.ProvidersModule),
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./items/items.module').then((m) => m.ItemsModule),
  },
  {
    path: 'item-provider',
    loadChildren: () =>
      import('./item-provider/item-provider.module').then((m) => m.ItemProviderModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'buys',
    loadChildren: () =>
      import('./buy/buys.module').then((m) => m.BuysModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
