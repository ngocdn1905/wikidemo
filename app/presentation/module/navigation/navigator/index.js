import {NavigationHelper} from 'app/presentation/module/navigation/helper';
import {appRoutes} from 'app/presentation/module/navigation/route';

const openDetail = params => {
    NavigationHelper.navigate(appRoutes.Main.Detail, {data: params});
}


export const MainNavigator = {
    openDetail,
}
