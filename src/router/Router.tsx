import { Layout } from 'components/Layout';
import { AuthorsPage } from 'pages/AuthorsPage';
import { PostsPage } from 'pages/PostsPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate replace to="/posts" />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
      </Routes>
    </Layout>
  );
}

export default Router;
