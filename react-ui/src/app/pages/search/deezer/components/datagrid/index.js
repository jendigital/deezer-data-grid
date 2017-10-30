import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { SortingState, LocalSorting, TableColumnResizing,
    FilteringState, LocalFiltering, RowDetailState } from '@devexpress/dx-react-grid';
import { Grid, TableView, TableHeaderRow, TableFilterRow, VirtualTableView
} from '@devexpress/dx-react-grid-bootstrap3';
import $ from 'jquery'; import { Icon } from 'react-fa';
import { FormattedMessage } from 'react-intl';
import BooleanTypeProvider from './boolean'; import ImgTypeProvider from './img';
import DeezerTypeProvider from './deezer'; import PlayerTypeProvider from './player';
import ApiTypeProvider from './api'; import './index.css';

class DataGrid extends Component {
    constructor(props) {
        super(props);

        this.search        = this.search.bind(this);

        this.tracks = [];
        this.songs = this.search('');

        this.state = {
            columns: [
                { name: 'title', title: 'Titre' }, { name: 'artist', title: 'Artiste' },
                { name: 'album_name', title: 'Album' }, { name: 'deezer_link', title: 'Deezer', dataType: 'deezer' },
                { name: 'extract', title: 'Extrait', dataType: 'player' }, { name: 'lyrics', title: 'Lyrics', dataType: 'boolean'},
                { name: 'artist_cover', title: 'Artiste Cover', dataType: 'img' }, { name: 'playlist', title: 'Playlist de l\'artist', dataType:'api' },
                { name: 'album_playlist', title: 'Album', dataType:'api' }, { name: 'album_cover', title: 'Album Cover', dataType: 'img' }
            ],
            rows: [],
            sorting: [{ columnName: 'title', direction: 'asc' }],
            columnWidths: {
                title:       150, artist:   120, album_name:     150,
                deezer_link: 150, extract:  150, lyrics:         100,
                artist_cover:150, playlist: 150, album_playlist: 150,
                album_cover: 150
            }
        };

        this.changeSorting = sorting => this.setState({ sorting });
        this.changeColumnWidths = (columnWidths) => { this.setState({ columnWidths }); };
    }

    queryString(string) {
        let url = 'http://api.deezer.com/search/track?q=', query;
        query = string;
        
        if(query === '') { query = 'Take a bow'; }

        let formatted_query = query.split(' ').join('-');
        let request = url + formatted_query + '&output=jsonp';

        return request;
    }

    search(event) {
        let request;
        if(event !== ''){ request = this.queryString(event.target.value);
        } else { request = this.queryString(''); }
        this.tracks = [];
        
        fetchJsonp(request, { timeout: 3000 })
        .then((result) => {
            let lists = result.json();
            
            lists
            .then((songs) => {
                for(let i = 0; i < songs.total; i++) {
                    let song = songs.data[i];

                    this.tracks.push({
                        title: song.title, artist: song.artist.name,
                        album_name: song.album.title, deezer_link: song.link,
                        extract: song.preview, lyrics: song.explicit_lyrics,
                        artist_cover: song.artist.picture, playlist: song.artist.tracklist,
                        album_playlist: song.album.tracklist, album_cover: song.album.cover
                    });
                }

                this.setState({rows:this.tracks}); this.lastQuery = request;
                return this.tracks;
            });
        })
        .catch(function(erreur) {
            console.log(erreur);
            return;
        });
        return this.tracks;
    }

    displayFilter() { $('#deezer_search').removeClass('hide_filter').addClass('show_filter'); }

    hideFilter() { $('#deezer_search').removeClass('show_filter').addClass('hide_filter'); }

    render() {
        let { rows, columns, columnWidths, sorting } = this.state;
        return (
            <div id="deezer_search" className='hide_filter'>
                <input id="search-engine" type="text" placeholder="Rechercher une musique, un album, un artiste.." onChange={this.search} />
                <div id='filter'>
                    <a onClick={this.displayFilter}> <FormattedMessage id="deezer.filter" /> <Icon name='chevron-up' /> </a>
                </div>

                <div id='hideFilter'>
                    <a onClick={this.hideFilter}> <FormattedMessage id="deezer.hideFilter" /> <Icon name='chevron-down' /> </a>
                </div>

                <Grid rows={rows} columns={columns} >
                    <FilteringState defaultFilters={[]}/>
                    <SortingState sorting={sorting} onSortingChange={this.changeSorting} />
                    <RowDetailState /> <LocalFiltering /> <LocalSorting />
                    
                    <BooleanTypeProvider /> <ImgTypeProvider /> <DeezerTypeProvider />
                    <PlayerTypeProvider /> <ApiTypeProvider />

                    <TableView /> <VirtualTableView /> 
                    <TableColumnResizing columnWidths={columnWidths} 
                        onColumnWidthsChange={this.changeColumnWidths} />
                    <TableHeaderRow allowResizing allowSorting />
                    <TableFilterRow rowHeight={50}  />
                </Grid>
            </div>
        )
    }
}

export default DataGrid;
