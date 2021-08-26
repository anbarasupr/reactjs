import React, { useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import ClassCounter from './ClassCounter';
import HookCounter from './HookCounter';

function Topics() {
    const history = useHistory();
    const [coupon, setCoupon] = useState({ classCounterCoupon: 5, hookCounterCoupon: 10 });

    const clickHandler = () => {
        console.log('Topics Navigate Click handler');
        //<Route path="/" render={(props) => <ButtonToNavigate {...props} title="Navigate elsewhere" />} />
        history.push("/topics/navigate-counter");
    }

    const navigate = (params) => {
        console.log('navigate', params);
        history.push("/topics/navigate-click-counter");
    }

    const clickNavigateHandler = (params) => {
        console.log('Topics Navigate Click Handler Counter', params);
        return (<ClassCounter myCoupon={coupon}></ClassCounter>);
    }



    return (
        <div>
            <div>
                <h3>Topics</h3>
                <li>
                    <Link to='/topics/class-counter'>Class Counter</Link>
                </li>
                <li>
                    <Link to='/topics/hook-counter/12345'>Hook Counter</Link>
                </li>
                <li>
                    <Link to='/topics/random-counter'><button>Random Counter</button></Link>
                </li>
                <li>
                    <button onClick={clickHandler}> Navigate Click Counter</button>
                </li>
                <li>
                    <button onClick={navigate}> Navigate Click Handler Counter</button>
                </li>
            </div>

            <div>
                <Route path='/topics/class-counter'>
                    <ClassCounter myCoupon={coupon}></ClassCounter>
                </Route>
                <Route path='/topics/hook-counter/:id' component={HookCounter}>
                </Route>
                <Route path='/topics/random-counter'>
                    <ClassCounter myCoupon={coupon}></ClassCounter>
                </Route>
                <Route path='/topics/navigate-counter' render={() => <ClassCounter myCoupon={coupon}></ClassCounter>}>
                </Route>
                <Route path='/topics/navigate-click-counter' render={clickNavigateHandler}>
                </Route>
            </div>
        </div>
    )
}

export default Topics
