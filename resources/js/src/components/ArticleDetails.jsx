import React from "react";

const ArticleDetails = ({ match }) => {
    return <h1>{match.params.name}</h1>;
};

export default ArticleDetails;
