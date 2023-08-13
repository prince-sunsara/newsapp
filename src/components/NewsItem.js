import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                <div style={{
                            display: "flex",
                            position: "absolute",
                            justifyContent: "flexEnd",
                            right: 0
                        }}>
                            <span className="badge bg-danger"> {source} </span>
                        </div>
                    <img src={imageUrl ? imageUrl : "https://th.bing.com/th/id/OIP.u_f5rkbrEUWA1ywe9JsbyAHaFj?pid=ImgDet&rs=1"} className="card-img-top" alt="Oops!" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                        <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More!</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem