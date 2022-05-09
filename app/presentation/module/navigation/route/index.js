import {SearchComponent} from 'app/presentation/module/search';
import {DetailComponent} from 'app/presentation/module/detail';

export const appScreens = {
    Search: SearchComponent,
    Detail: DetailComponent
}

export const appRoutes = {
    Main: {
        Search: 'Main.Search',
        Detail: 'Main.Detail',
    }
}
