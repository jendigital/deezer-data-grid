import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { DataTypeProvider, EditingState } from '@devexpress/dx-react-grid';
import { Grid, TableView, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap3';
import './index.css';

const BooleanTypeProvider = () => (
    <DataTypeProvider
      type="boolean"
      formatterTemplate={({ value }) =>
        <span className="label label-default">{value ? 'Disponible' : 'Indisponible'}</span>}
      editorTemplate={({ value, onValueChange }) => (
        <select
          className="form-control"
          value={value}
          onChange={e => onValueChange(e.target.value === 'true')}
        >
          <option value={false}>Indisponible</option>
          <option value>Disponible</option>
        </select>
      )}
    />
  );

class DataGrid extends Component {
    constructor(props) {
        super(props);

        this.search        = this.search.bind(this);

        this.tracks = [];
        this.songs = this.search('');
        this.state = {
            columns: [
                { name: 'title', title: 'Titre' },
                { name: 'artist', title: 'Artiste' },
                { name: 'album_name', title: 'Nom de l\'album' },
                { name: 'deezer_link', title: 'Deezer' },
                { name: 'extract', title: 'Extrait' },
                { name: 'lyrics', title: 'Lyrics', dataType: 'boolean'},
                { name: 'artist_cover', title: 'Artiste Cover' },
                { name: 'playlist', title: 'Playlist de l\'artist' },
                { name: 'album_playlist', title: 'Album' },
                { name: 'album_cover', title: 'Album Cover' }
            ],
            rows: []
        };
    }

    queryString(string) {
        let url = 'http://api.deezer.com/search/track?q=';
        let query;

        query = string;
        
        if(query === '') {
            query = 'Take a bow';
        }

        let formatted_query = query.split(' ').join('-');
        let request = url + formatted_query + '&output=jsonp';

        return request;
    }

    search(event) {
        let request;
        if(event !== ''){
            request = this.queryString(event.target.value);
        } else {
            request = this.queryString('');
        }
        this.tracks = [];
        
        fetchJsonp(request, { timeout: 3000 })
        .then((result) => {
            let lists = result.json();
            
            lists
            .then((songs) => {
                for(let i = 0; i < songs.total; i++) {
                    let song = songs.data[i];

                    this.tracks.push({
                        title: song.title,
                        artist: song.artist.name,
                        album_name: song.album.title,
                        deezer_link: song.link,
                        extract: song.preview,
                        lyrics: song.explicit_lyrics,
                        artist_cover: song.artist.picture,
                        playlist: song.artist.tracklist,
                        album_playlist: song.album.tracklist,
                        album_cover: song.album.cover
                    });
                    
                }

                this.setState({rows:this.tracks});
                this.lastQuery = request;
                return this.tracks;
            });
        })
        .catch(function(erreur) {
            console.log(erreur);
            return;
        });
        return this.tracks;
    }

    render() {
        let { rows, columns } = this.state;
        return (
            <div id="deezer_search">
                <input id="search-engine" type="text" 
                    placeholder="Rechercher une musique, un album, un artiste..." 
                    onChange={this.search}
                />
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <BooleanTypeProvider />
                    <TableView />
                    <TableHeaderRow />
                </Grid>
            </div>
        )
    }
}

export default DataGrid;
