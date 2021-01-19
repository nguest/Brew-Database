import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { global } from './styles/global';

import { Header } from './components/Header';
import { Page } from './components/Page';
import { GlobalFooter } from './components/GlobalFooter';

import { YeastPage } from './pages/YeastPage';
import { YeastDetailPage } from './pages/YeastDetailPage';

const AboutPage = () => {
    return <h2>About</h2>;
};

function ContactPage() {
    return <h2>Contact</h2>;
}

export const App = () => {
    return (
        <div>
            <Global styles={global} />
            <Router>
                <Header />
                <Page>
                    <Switch>
                        <Route path="/yeast/:yeastUuid">
                            <YeastDetailPage />
                        </Route>
                        <Route path="/yeast">
                            <YeastPage />
                        </Route>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        <Route path="/contact">
                            <ContactPage />
                        </Route>

                        <Route exact path="/">
                            <Redirect to="/yeast" />
                        </Route>
                    </Switch>
                </Page>
                <GlobalFooter />
            </Router>
        </div>
    );
};

export default App;
