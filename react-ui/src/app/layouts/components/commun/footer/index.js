import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div id='info' >
                    <a className='margin-left' href='https://www.deezer.com' target='_blank' rel="noopener noreferrer">
                        <h5>Deezer</h5>
                    </a>
                    <a href='https://developers.deezer.com/api' target='_blank' rel="noopener noreferrer">
                        <h5>Deezer API</h5>
                    </a>
                    <a href='https://github.com/jendigital/deezer-data-grid' target='_blank' rel="noopener noreferrer">
                        <h5>Github</h5>
                    </a>
                    <a href='https://trello.com/b/TtURM337/deezer-search-data-grid-test' target='_blank' rel="noopener noreferrer">
                        <h5>Trello</h5>
                    </a>
                    <a href='https://github.com/camsong/fetch-jsonp' target='_blank' rel="noopener noreferrer">
                        <h5>Fetch JSONP</h5>
                    </a>
                    <a href='https://devexpress.github.io/devextreme-reactive/react/grid/' target='_blank' rel="noopener noreferrer">
                        <h5>React Grid by DevExtreme</h5>
                    </a>
                    <a href='https://www.webpackbin.com/bins/-KoCcFwPPtps5fEN0PkI' target='_blank' rel="noopener noreferrer">
                        <h5>React Grid Webpackbin</h5>
                    </a>
                    <a href='https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc' target='_blank' rel="noopener noreferrer">
                        <h5>Create React App</h5>
                    </a>
                    <a href='https://facebook.github.io/jest/' target='_blank' rel="noopener noreferrer">
                        <h5>Jest</h5>
                    </a>
                    <a href='https://console.cloud.google.com/' target='_blank' rel="noopener noreferrer">
                        <h5>Google CDN</h5>
                    </a>
                    <a href='https://devcenter.heroku.com/start' target='_blank' rel="noopener noreferrer">
                        <h5>Heroku Deploy</h5>
                    </a>
                    <a className='margin-right' href='https://code.visualstudio.com/' target='_blank' rel="noopener noreferrer">
                        <h5>VS Code IDE</h5>
                    </a>
                </div>
                <div className='illustration'>
                    <a className='margin-left first' href='https://www.deezer.com' target='_blank' rel="noopener noreferrer">
                        <img alt='Deezer Website' src='https://storage.googleapis.com/deezer-data-grid/Footer/deezer_website.png' />
                    </a>
                    <a href='https://developers.deezer.com/api' target='_blank' rel="noopener noreferrer">
                        <img alt='Deezer API' src='https://storage.googleapis.com/deezer-data-grid/Footer/deezer_api.png' />
                    </a>
                    <a href='https://github.com/jendigital/deezer-data-grid' target='_blank' rel="noopener noreferrer">
                        <img alt='Github' src='https://storage.googleapis.com/deezer-data-grid/Footer/deezerdg_github.png' />
                    </a>
                    <a href='https://trello.com/b/TtURM337/deezer-search-data-grid-test' target='_blank' rel="noopener noreferrer">
                        <img alt='Trello' src='https://storage.googleapis.com/deezer-data-grid/Footer/deezer_trello.png' />
                    </a>
                    <a href='https://github.com/camsong/fetch-jsonp' target='_blank' rel="noopener noreferrer">
                        <img alt='Fetch JSONP' src='https://storage.googleapis.com/deezer-data-grid/Footer/api_fetch_jsonp.png' />
                    </a>
                    <a href='https://devexpress.github.io/devextreme-reactive/react/grid/' target='_blank' rel="noopener noreferrer">
                        <img alt='React Grid' src='https://storage.googleapis.com/deezer-data-grid/Footer/react_datagrid_doc.png' />
                    </a>
                    <a className='margin-right' href='https://www.webpackbin.com/bins/-KoCcFwPPtps5fEN0PkI' target='_blank' rel="noopener noreferrer">
                        <img alt='Webpackbin' src='https://storage.googleapis.com/deezer-data-grid/Footer/deezer_webpackbin.png' />
                    </a>
                </div>
                <div className='illustration'>
                    <a className='margin-left first' href='https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc' target='_blank' rel="noopener noreferrer">
                        <img alt='Create React App' src='https://storage.googleapis.com/deezer-data-grid/Footer/create_react_app.png' />
                    </a>
                    <a href='https://facebook.github.io/jest/' target='_blank' rel="noopener noreferrer">
                        <img alt='Jest' src='https://storage.googleapis.com/deezer-data-grid/Footer/jest.png' />
                    </a>
                    <a href='https://console.cloud.google.com/' target='_blank' rel="noopener noreferrer">
                        <img alt='Google CDN' src='https://storage.googleapis.com/deezer-data-grid/Footer/google_cdn.png' />
                    </a>
                    <a href='https://devcenter.heroku.com/start' target='_blank' rel="noopener noreferrer">
                        <img alt='Heroku' src='https://storage.googleapis.com/deezer-data-grid/Footer/heroku.png' />
                    </a>
                    <a href='https://code.visualstudio.com/' target='_blank' rel="noopener noreferrer">
                        <img alt='VS Code' src='https://storage.googleapis.com/deezer-data-grid/Footer/vscode.png' />
                    </a>
                    <a href='https://github.com/jendigital/deezer-data-grid' target='_blank' rel="noopener noreferrer">
                        <img alt='Deezer' className='logo' src='https://storage.googleapis.com/deezer-data-grid/Deezer_logo.png' />
                    </a>
                    <a className='margin-right' href='https://developers.deezer.com/api' target='_blank' rel="noopener noreferrer">
                        <img alt='Deezer API' src='https://storage.googleapis.com/deezer-data-grid/Footer/deezer_team.png' />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
