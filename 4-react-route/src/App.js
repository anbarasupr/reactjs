import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import ClassCounter from './pages/ClassCounter';
import HookCounter from './pages/HookCounter';
import Topics from './pages/Topics';

function App() {
  return (
    <div>
      <MainNavigation />
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
        <Route path='/topics'>
          <Topics />
        </Route>
        <Route path='/class-counter'>
         <ClassCounter></ClassCounter>
        </Route>
        <Route path='/hook-counter/:id' component={HookCounter}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
