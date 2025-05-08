import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const moviesData = [
  {
    id: 1,
    title: 'Skyforce',
    year: 2025,
    genre: 'Action',
    image:
      'https://s.yimg.com/zb/imgv1/3da7317e-d1f3-3256-97c8-86965f5deccd/t_500x300',
  },
  {
    id: 2,
    title: 'Lakshya',
    year: 2004,
    genre: 'Action',
    image:
      'https://image.tmdb.org/t/p/original/j8Fhn2BUh792ck8WzQcDdLQVQlf.jpg',
  },
  {
    id: 3,
    title: 'Uri',
    year: 2019,
    genre: 'Action',
    image:
      'https://metadata-static.plex.tv/1/gracenote/1b3c69d5b1af48873612978bed7eb4d7.jpg',
  },
  {
    id: 4,
    title: 'Shershah',
    year: 2021,
    genre: 'Action',
    image:
      'https://tse3.mm.bing.net/th?id=OIP.bYzrZYrTzFJFutSwIIeVMgHaEH&pid=Api&P=0&h=180',
    
  },
];

function MovieList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSort = (e) => setSortOrder(e.target.value);

  const filteredMovies = moviesData
    (.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    .sort((a, b) =>
      sortOrder === 'asc'
    ? a.year.localeCompare(b.year)
    : b.year.localeCompare(a.year)
    ));
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search movie..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select className="form-select w-25" onChange={handleSort} value={sortOrder}>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      <div className="row">
        {filteredMovies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                height="300"
                style={{ objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  Genre: {movie.genre} <br/>
                  Year: {movie.year}
                </p>
              
                <button className="btn btn-primary w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center text-muted mt-5">
          <h5>No movies found</h5>
        </div>
      )}
    </div>
  );
}

export default MovieList;
