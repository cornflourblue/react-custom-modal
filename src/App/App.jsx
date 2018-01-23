import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { TestPage } from '../TestPage';

import '../_content/app.less';
import '../_content/jw-modal.less';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/test-page">Test Page</Link>
                    </nav>
                    <div>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/test-page" component={TestPage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 