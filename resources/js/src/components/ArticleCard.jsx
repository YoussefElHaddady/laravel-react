import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <div className="card mx-4 my-3" style={{ width: "18rem" }}>
            <img
                src={`https://picsum.photos/400/200?random=${article.id}`}
                alt={article.title}
                className="card-img-top"
                style={{
                    objectFit: "contain",
                }}
            />
            <div className="card-body">
                <h5
                    className="card-title overflow-hidden"
                    style={{
                        maxHeight: "3rem",
                        height: "3rem",
                        minHeight: "3rem",
                    }}
                >
                    {article.title}
                </h5>
                <p
                    className="card-text overflow-hidden"
                    style={{
                        height: "3rem",
                        minHeight: "1rem",
                        whiteSpace: "normal",
                        textOverflow: "ellipsis",
                    }}
                >
                    {article.content}
                </p>
                <Link to={`/articles/${article.title}`} className="card-link">
                    Read more...
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;
