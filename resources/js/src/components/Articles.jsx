import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const articles = [
        { id: 1, title: "CSharp Courses", content: "bla bla bla" },
        { id: 2, title: "Java Courses", content: "bla bla Java, bla bla Java" },
        { id: 3, title: "Android Courses", content: "bla bla Android, bla bla Android" },
    ];

    return (
        <div>
            <h1>All Articles</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {articles.map((art) => (
                    <ArticleCard key={art.id} article={art} />
                ))}
            </div>
        </div>
    );
};

export default Articles;
