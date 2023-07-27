import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { getMenu } from '../../api/menu.api';
import { useAuth } from "../../contexts/AuthContext";
import Loader from '../Content/Loader';

const generateMenuItems = (items: any) => {
  return items?.map((item: any) => {
    if (item.childs && item.childs.length > 0) {
      return (
        <SubMenu label={<div className='flex items-center'>
        <i className={item.icon}></i>
        {item.title}
        </div>} key={item.id}>
          {generateMenuItems(item.childs)}
        </SubMenu>
      );
    } else {
      return (
        <MenuItem key={item.id}>
          <div className='flex items-center'>
          <i className={item.icon}></i>
          {item.title}
          </div>
        </MenuItem>
      );
    }
  });
};

const App = () => {

  const [menuData, SetmenuData] = useState([]);
  const { token, account } = useAuth();
  const [loading, Setloading] = useState(true);
  const getmenuItem = async () => {
    if (token && account) {
      const result = await getMenu({ tenantId: (JSON.parse(account)).tenants[0].id, token: token });
      SetmenuData(result.data);
      Setloading(false);
    }
  }
  useEffect(() => {
    getmenuItem();
  }, []);

  // useEffect(() => {
  //   Setloading(false)
  // }, [menuData]);

  return (
    <div>
      <Sidebar>
        {loading&&<Loader />}
        <Menu>
          {generateMenuItems(menuData)}
        </Menu> 
      </Sidebar>
    </div>
  );
};

export default App;