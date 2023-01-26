import React from 'react';
import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { NotFound } from 'Containers/NotFounde';
import { AboutUs } from 'Containers/AboutUs';
import { Video } from 'Containers/Video';
import { Gallery } from 'Containers/Gallery';
import Post1 from 'Containers/Posts/Post1';
import Post2 from 'Containers/Posts/Post2';
import Post3 from 'Containers/Posts/Post3';
import Post4 from 'Containers/Posts/Post4';
import Post5 from 'Containers/Posts/Post5';
import Post6 from 'Containers/Posts/Post6';
import { Auth } from 'Containers/AuthForm';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.aboutUs} element={<AboutUs />} />
      <Route path={routes.gallery} element={<Gallery />} />
      <Route path={routes.video} element={<Video />} />
      <Route path={routes.post1} element={<Post1 />} />
      <Route path={routes.post2} element={<Post2 />} />
      <Route path={routes.post3} element={<Post3 />} />
      <Route path={routes.post4} element={<Post4 />} />
      <Route path={routes.post5} element={<Post5 />} />
      <Route path={routes.post6} element={<Post6 />} />
      <Route path={routes.auth} element={<Auth />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
