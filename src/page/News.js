import React, { useState, useEffect } from 'react';
import NewsUpdate from '../components/NewsUpdate';
import Navbar from '../components/Navbar';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    setLoading(true);
    const tanggal = new Date();
    const tahun = tanggal.getFullYear();
    const bulan = String(tanggal.getMonth() + 1).padStart(2, '0'); // Tambahkan 1 karena bulan dimulai dari 0
    const hari = String(tanggal.getDate()).padStart(2, '0');
    const formatTanggal = `${tahun}-${bulan}-${hari}`;
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=${formatTanggal}&sortBy=popularity&apiKey=4dadb27f447e4a42bd7450026e51813e`)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
        setFilteredArticles(data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleSearchChange = event => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
    filterArticles();
  };

  const filterArticles = () => {
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArticles(filteredArticles);
  };

  return (
    <div>
      <Navbar/>
      <div className='container my-3'>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="row">
          {filteredArticles.map(element => (
            <div className="col-md-4" key={element.url}>
              <NewsUpdate
                title={element.title}
                key={element.url}
                newsUrl={element.url}
                description={element.description.slice(0, 100)}
                imageUrl={element.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default News;
