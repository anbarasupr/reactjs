
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './AllMeetups';
import NewMeetupPage from './NewMeetup';
import FavoritesPage from './Favorites';

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <AllMeetupsPage />
            </Route>
            <Route path='/new-meetup'>
                <NewMeetupPage />
            </Route>
            <Route path='/favorites'>
                <FavoritesPage />
            </Route>
            {/* <Route path='/topics'>
                <Topics />
            </Route>
            <Route path='/class-counter'>
                <ClassCounter></ClassCounter>
            </Route>
            <Route path='/hook-counter/:id' component={HookCounter}>
            </Route> */}
        </Switch>

    )

}

export default AppRouter;
