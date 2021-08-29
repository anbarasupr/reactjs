import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MainNavigation: React.FC = () => {
    const history = useHistory();

    const navigateToParty = (params: any) => {
        console.log('MainNavigation navigateToParty', params);
        history.push("/party");
    }

    return (
        <header>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                    <li>
                        <a href='#' onClick={navigateToParty}>My Party</a>
                    </li>
                    <li>
                        <Link to='/topics'>My Topics</Link>
                    </li>
                    <li>
                        <Link to='/class-counter'>Class Counter</Link>
                    </li>
                    <li>
                        <Link to='/hook-counter/12345'>Hook Counter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
