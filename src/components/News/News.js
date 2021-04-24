import React, { useEffect, useState } from "react"
import axios from "axios"
import "./news.scss"

const URL = "https://apis.e99.in/weathernews/5/1"

const News = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [news, setNews] = useState([])
  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      ;(async () => {
        const res = await axios.get(URL)
        setIsLoading(false)
        setNews(res.data)
      })()
    }
    return () => {
      unmounted = true
    }
  }, [])
  return (
    <div className="news__container">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Lading...
        </div>
      ) : (
        <div>
          <h1
            style={{ textAlign: "center", fontWeight: 900, color: "#004747" }}
          >
            ENVIRONMENT
          </h1>
          {news.map(singleNews => (
            <div className="app-card">
              <img src={singleNews.urlToImage} alt="news image" />
              <div className="details">
                <div style={{ margin: "1rem 0" }}>
                  <span>ARTICLE</span>{" "}
                  <span style={{ float: "right" }}>
                    {singleNews.publishedAt}
                  </span>
                </div>
                <h5>{singleNews.title}</h5>
                <p>{singleNews.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default News
