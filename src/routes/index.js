import { Home, Upload, Following, Search, ErorrRouter } from "~/pages";
import { HeaderOnly } from "~/components/Layout";

const publicRoutes = [
    { path: '/', component: Home, key: 'home' },
    { path: '/following', component: Following, key: 'following' },
    { path: '/upload', component: Upload, key: 'upload', layout: HeaderOnly },
    { path: '/search', component: Search, key: 'search', layout: null },
    { path: '/search', component: Search, key: 'search', layout: null },
    { path: '/search', component: Search, key: 'search', layout: null },
    { path: '*', component: ErorrRouter, key: 'erorr_router', layout: null },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes }