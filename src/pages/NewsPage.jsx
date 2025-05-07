import { useState, useEffect } from 'react';
import '../styles/NewsPage.css';

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('http://localhost:5000/api/news');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="NewsPage">
      <h1>Latest News</h1>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h2>{item.title}</h2>
            <p><strong>Date:</strong> {item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}