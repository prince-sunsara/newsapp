import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b3318bf947414be9ac53dac6ce005e35&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevClick = async () => {
        // console.log("previous");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b3318bf947414be9ac53dac6ce005e35&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
        })
    }

    handleNextClick = async () => {
        // console.log("next");

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b3318bf947414be9ac53dac6ce005e35&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url);
            let parsedData = await data.json()

            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
            })
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>LoveNews - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-light" onClick={this.handlePrevClick}>
                        <i className="fa-solid fa-arrow-left"></i>
                        Previous
                    </button>
                    <button type="button" className="btn btn-light" onClick={this.handleNextClick}>
                        Next
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default News