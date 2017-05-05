import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import './styles.css';

import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.props.toggleMenu();
    }
    render() {
        return (
            <header>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column textAlign="left">
                            <div className="header-title">Warming Up</div>
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                            <a href="#" className="menu-toggle" onClick={this.toggleMenu}><Icon name="sidebar" size="large" /></a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </header>
        );
    }
}

class App extends Component {

    state = { sidebar_visible: false }

    toggleMenu = () => this.setState({ sidebar_visible: !this.state.sidebar_visible })

    render() {
        const { sidebar_visible } = this.state;
        let paragraphs = [];
        for (let i = 1; i <= 20; i++) {
            paragraphs.push(<p key={i}>{i}</p>);
        }

        return (
            <Router>
                <div className="application-container">
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar as={Menu} animation='slide along' width='thin' direction='right' visible={sidebar_visible} vertical inverted>
                            <Menu.Item as={Link} to="/" name='home' onClick={this.toggleMenu}>Home</Menu.Item>
                            <Menu.Item as={Link} to="/about" name='about' onClick={this.toggleMenu}>About</Menu.Item>
                            <Menu.Item as={Link} to="/foobar" name='foobar' onClick={this.toggleMenu}>Not Found</Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Segment basic className="application">
                                <AppHeader toggleMenu={this.toggleMenu} />

                                <div className="application-body">
                                    <Grid columns={1}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                {paragraphs}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>


                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/about" component={About} />
                                    <Route component={NotFound} />
                                </Switch>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </Router>
        );
    }
}

export default App;
