import { Error, UserForm, Experience, UserList, Education, Dashboard } from '../pages'


const routes = [
    // {
    //     path: '/',
    //     component: <Dashboard />,
    //     exact: true
    // },
    {
        path: '/dashboard',
        component: <Dashboard />,
        exact: true,
        initialRoute: true,
    },
    {
        path: '/users/form',
        component: <UserForm />,
        exact: true
    },
    {
        path: '/users/form/:id',
        component: <UserForm />,
        exact: true
    },
    {
        path: '/users',
        component: <UserList />,
        exact: true
    },
    {
        path: '/experience',
        component: <Experience />,
        exact: true
    },
    {
        path: '/education',
        component: <Education />,
        exact: true
    },
    {
        path: '*',
        component: <Error />
    }
];

export default routes;