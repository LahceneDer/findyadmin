import React from "react";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  return (
    <div>
      ArticlesPage
      <Link to="/dashboard/articles/add-article">
        <button> add article</button>
      </Link>
    </div>
  );
};

export default ArticlesPage;
