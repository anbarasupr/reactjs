import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import MainNavigation from './components/MainNavigation';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Party from './components/Party';
import AllMeetupsPage from './components/AllMeetups';
import NewMeetupPage from './components/NewMeetup';
import FavoritesPage from './components/Favorites';
import Topics from './components/Topics';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg"
    }
  ])

  const renderPartyHandler = (params: any) => {
    console.log('App renderPartyHandler', params);
    return (<Party people={people} setPeople={setPeople}></Party>);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <MainNavigation></MainNavigation>
        {/* <AppRouter></AppRouter>
        <Party people={people} setPeople={setPeople}></Party> */}

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
          <Route path='/party' render={renderPartyHandler}>
          </Route>

          <Route path='/topics'>
            <Topics />
          </Route>
          {/* <Route path='/class-counter'>
                <ClassCounter></ClassCounter>
            </Route>
            <Route path='/hook-counter/:id' component={HookCounter}>
            </Route> */}
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
