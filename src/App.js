import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LayoutWish from './layouts/LayoutWish';
import UserList from './pages/UserList';
import UserRegistPage from './pages/UserRegistPage';
import Items from './pages/Items';
import Login from './pages/Login';
import ItemRegistPage from './pages/itemRegistPage';
import OtherItems from './pages/OtherItems';
import ItemDetailForm from './pages/ItemDetailForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path="login" element={<Login />} />
          <Route path="userregist" element={<UserRegistPage />} />
        </Route>
        <Route path="itemlist" element={<LayoutWish />}>
          <Route path=":userId" element= {<OtherItems />}/>
          <Route path="mylist" element= {<Items />}/>
        </Route> 
        <Route path="item" element={<LayoutWish />}>
          <Route path=":id" element={<ItemDetailForm />}/>
          <Route path="modify" element={ <ItemRegistPage/> }/> {/* 아이템업데이트로연결 */}
        </Route>
          
      </Routes>
    </BrowserRouter>

  );
}

export default App;