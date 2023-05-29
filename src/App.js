import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import FaqsNotifications from './components/Notifications/FaqsNotifications'
import LikesNotifications from './components/Notifications/LikesNotifications'
import MyVideos from './components/MyVideos/MyVideos'
import VideoPost from './components/VideoPost'
import Profile from './components/Profile'
import Signin from './components/Signin'
import Signup from './components/Signup'
import IsAuth from './components/IsAuth'
import Invalid from './components/Invalid'

import Subscriptions from './components/Subscriptions/Subscriptions'
import './css/main.css';
import './css/menus.css';
import './css/videolist.css';
import './css/videopost.css';
import './css/signup-in.css';
import './css/spinner.css';
import './css/notifications.css';
import './css/profile.css';
import './js/canvasUtils.js';
import axios from 'axios';
import NavMenus from './components/NavMenus'
function App() {


  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Accept'] = 'application/json'
  axios.defaults.withCredentials = true;
  axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem("token");
    if (token === null) token = sessionStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  })
  return (
    <>
    <NavMenus />
      <Routes>
        <Route path='/' element={<IsAuth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/faqs-notifications' element={<FaqsNotifications />} />
        <Route path='/likes-notifications' element={<LikesNotifications />} />
        <Route path='/video-post' element={<VideoPost />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/my-videos' element={<MyVideos />} />
        <Route path='*' element={<Invalid />} />
      </Routes>
    </>
  );
}

export default App;
