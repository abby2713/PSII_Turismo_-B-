import FirstScreen from './pages/LandingScreen/FirstScreen';
import SegScreen from './pages/MainScreen/Seg';
import MapView from './pages/MapScreen/MapView';
import CardFavorite from './pages/FavoriteScreen/Components/CardFavorite';
import FavoriteScreen from './pages/FavoriteScreen/FavoriteScreen';
import PlaceCard from './pages/MapScreen/Components/PlaceCard';
import CardPlace from './pages/MapScreen/Components/CardPlace';

const ScreenList = [
    {
        name: 'FirstScreen',
        component: FirstScreen,
    },
    {
        name: 'Seg',
        component: SegScreen,
    },
    {
        name: 'MapView',
        component: MapView,
    },
    {
        name: 'CardFavorite',
        component: CardFavorite,
    },
    {
        name: 'FavoriteScreen',
        component: FavoriteScreen,
    },
    {
        name: 'PlaceCard',
        component: PlaceCard,
    },
    {
        name: 'CardPlace',
        component: CardPlace,
    },
]

export default ScreenList;