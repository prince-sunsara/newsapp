import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://th.bing.com/th/id/OIP.u_f5rkbrEUWA1ywe9JsbyAHaFj?pid=ImgDet&rs=1"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More!</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem