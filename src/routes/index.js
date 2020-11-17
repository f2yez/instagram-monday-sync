import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from "../components/app";
import Spinner from '../components/shared/spinner';

// Lazy load for my components and add more dynamic for my routes
// by passing some attruites using by array of objects

const ItemsComponent = React.lazy(() => import('../components/items'));
const ItemComponent = React.lazy(() => import('../components/item'));

// My routes array
export const routes = [
	{
		path: '/',
		component: ItemsComponent,
		exact: true,
		key: 'home'
	},
	{
		path: '/items',
		component: ItemsComponent,
		key: 'items',
		exact: true,

	},
	{
		path: '/items/:id',
		component: ItemComponent,
		key: 'item',
		exact: true,

	},
	
];

// Add function look like template and using it to rendring route
export const CustomRoute = ({component: Component, key, ...rest}) => {
	return (<Route { ...rest } key={ key } render={ props => (
		<Component { ...props }/>
	)}/>);
};
	
// Render my all routers into switch and main layout
export const renderRoutes = (routes) => {
	return routes ? (
		<App>
			<Suspense fallback={<Spinner />}>
				<Switch>
					{ routes.map(route => CustomRoute({...route})) }
				</Switch>
			</Suspense>
		</App>
	) : null;
};
