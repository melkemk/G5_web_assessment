'use client';
import React, { useState } from 'react';
import Upper from './upper';
import BlogList from './blogs';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Upper onSearchChange={handleSearchChange} />
      <BlogList searchTerm={searchTerm} />
    </div>
  );
};

export default BlogPage;
