import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { getMenu } from '../../api/menu.api';
import { useAuth } from "../../contexts/AuthContext";

const generateMenuItems = (items:any) => {
  return items.map((item:any) => {
    if (item.childs && item.childs.length > 0) {
      return (
        <SubMenu label={item.title} key={item.id}>
          {generateMenuItems(item.childs)}
        </SubMenu>
      );
    } else {
      return (
        <MenuItem key={item.id}>
          {item.title}
        </MenuItem>
      );
    }
  });
};

const App = () => {

  const [menuData, SetmenuData] = useState([]);
  const {token, account} = useAuth();
  const getmenuItem = async () =>{
    if(token&&account){
      const result = await getMenu({tenantId: (JSON.parse(account)).tenants[0].id, token: token});
      SetmenuData(result.data);
    }
  }
  getmenuItem();
  
  return (
    <div>
      <Sidebar>
        <Menu>
          {generateMenuItems(menuData)}
        </Menu>        
      </Sidebar>
    </div>
  );
};

export default App;