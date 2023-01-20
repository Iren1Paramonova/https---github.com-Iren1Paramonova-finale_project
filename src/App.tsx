import React from 'react';
import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { NotFound } from 'Containers/NotFounde';
import { AboutUs } from 'Containers/AboutUs';
import { VideoContent } from 'Components/Video';
import { Gallery } from 'Containers/Gallery';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.aboutUs} element={<AboutUs />} />
      <Route path={routes.gallery} element={<Gallery />} />
      <Route path={routes.video} element={<VideoContent />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
