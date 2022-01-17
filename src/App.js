import './App.css';
import Navigation from "./Nav/Navigation";
import {Route} from "react-router-dom";
import Tests from "./tests/Tests";
import LoginForm from "./loginForm/LoginForm";

const App = () => {
    return (
        <div>
            <Navigation/>
            <Route path={['/tests']}
                   render={() => <Tests/>}/>
            <Route path={['/loginform']}
                   render={() => <LoginForm/>}/>
        </div>
    );
}

export default App;
