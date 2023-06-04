import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Appbar from './components/header/Navbar'
import Home from './components/Home/Home'
import Signin from './components/auth/signin/Signin'
import Signup from './components/auth/signup/Signup'
import Influencers from './components/influencers/Influencers'
import Images from './components/influencers/elements/Images'
import Videos from './components/influencers/elements/Videos'
import Account from './components/accountuser/Account'
import AccountImages from './components/accountuser/elements/AccountImages'
import AccountVideos from './components/accountuser/elements/AccountVideos'
import Footer from './components/footer/Footer'

import ContactInfluencer from './components/contact-influencer/ContactInfluencer'
import Admin from './components/admin/Admin'
import AdminSignin from './components/admin/auth/signIn/AdminSignin'
import AdminSignUp from './components/admin/auth/signUp/AdminSignup'
import UserList from './components/admin/userlist/UserList'
import ContactUser from './components/admin/contactuser/ContactUser'
import Upload from './components/upload/Upload'
import ImagesUpload from './components/upload/images/ImagesUpload'
import VideosUpload from './components/upload/videos/VideosUpload'
import EditProfile from './components/accountuser/editprofile/EditProfile'


const NavbarOutlet = () => (
  <>
    <Appbar />
    <Outlet />
    <Footer/>
  </>
)
const BottomNavigation = () => (
  <>
  <Influencers/>
    <Outlet />
    </>
)
const AccountOutlet = () => (
  <>
    <Account />
    <Outlet/>
  </>
)
const AdminOutlet = () => (
  <>
    <Admin />
    <Outlet/>
  </>
)
  
const UploadOutlet = () => (
  <>
  <Upload />
  <Outlet/>
  </>
)



const App = () => {
  const userId = localStorage.getItem("userId");
  const adminid = localStorage.getItem("adminUserId");


  return (
    <>
      {/* <Appbar/> */}
      <Routes>
        <Route element={<NavbarOutlet />}>
        {userId !==undefined||null ?
             ['home', '/'].map((el, i) => <Route path={el} key={i} element={<Home />} />) 
          :
        <Route path='/signin' element={<Signin/>}  />
          }
          <Route path='/signin' element={<Signin/>}  />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contactinfluencer' element={<ContactInfluencer/>}/> 
        <Route path='/editprofile' element={<EditProfile/>}/>

        <Route path='/influencers' element={<BottomNavigation />}>
          <Route path='/influencers' element={<Images />} />
          <Route path='/influencers/videos' element={<Videos />} />
          {/* <Route path='/influencers/account' element={<Account />} /> */}
        </Route>
        
        <Route path={'/account'} element={<AccountOutlet />}>
            {['/account','/account/images'].map((page,i)=><Route path={page} key={i} element={<AccountImages/>} />)}  
            <Route path='/account/videos' element={<AccountVideos/>} />
          
        </Route>
        <Route path='/upload' element={<UploadOutlet />}>
            {['/upload','/upload/images'].map((page,i)=><Route path={page} key={i} element={<ImagesUpload/>} />)}  
            <Route path='/upload/videos' element={<VideosUpload/>} />          
        </Route>
        </Route>
        <Route path='/admin' element={<AdminOutlet />}>
        <Route path="/admin"
              element={
                 adminid !== null || undefined ? (
                  <UserList />
                ) : (
                  <AdminSignin />
                )
              }
            />
          {/* <Route path='/admin/signin' element={<AdminSignin />} /> */}
          <Route path='/admin/signup' element={<AdminSignUp/>} />
          <Route path='/admin/contactdata' element={<ContactUser/>} />
        </Route>
        
      </Routes>
   
    </>
  )
}

export default App