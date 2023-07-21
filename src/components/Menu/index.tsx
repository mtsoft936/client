import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

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
  const [menuData] = useState<any>([
    // The JSON data mentioned earlier
    {
      "id": "144d433e-f36b-1410-8bc6-0038e8a2eb3b",
      "level": "01",
      "title": "Menu 1",
      "tooltip": "",
      "description": "",
      "link_url": "",
      "icon": "",
      "isAction": false,
      "childs": [
          {
              "id": "1a4d433e-f36b-1410-8bc6-0038e8a2eb3b",
              "level": "0101",
              "title": "Menu 1.1",
              "tooltip": "",
              "description": "",
              "link_url": "",
              "icon": "",
              "isAction": false,
              "childs": [
                  {
                      "id": "204d433e-f36b-1410-8bc6-0038e8a2eb3b",
                      "level": "010101",
                      "title": "Menu 1.1.1",
                      "tooltip": "",
                      "description": "",
                      "link_url": "",
                      "icon": "",
                      "isAction": false,
                      "childs": [
                          {
                              "id": "3e4d433e-f36b-1410-8bc6-0038e8a2eb3b",
                              "level": "01010101",
                              "title": "Menu 1.1.1 [Accion1]",
                              "tooltip": "",
                              "description": "",
                              "link_url": "",
                              "icon": "",
                              "isAction": true,
                              "childs": []
                          },
                          {
                              "id": "444d433e-f36b-1410-8bc6-0038e8a2eb3b",
                              "level": "01010102",
                              "title": "Menu 1.1.1 [Accion2]",
                              "tooltip": "",
                              "description": "",
                              "link_url": "",
                              "icon": "",
                              "isAction": true,
                              "childs": []
                          }
                      ]
                  }
              ]
          },
          {
              "id": "264d433e-f36b-1410-8bc6-0038e8a2eb3b",
              "level": "0102",
              "title": "Menu 1.2",
              "tooltip": "",
              "description": "",
              "link_url": "",
              "icon": "",
              "isAction": false,
              "childs": []
          }
      ]
  },
  {
      "id": "2c4d433e-f36b-1410-8bc6-0038e8a2eb3b",
      "level": "02",
      "title": "Menu 2",
      "tooltip": "",
      "description": "",
      "link_url": "",
      "icon": "",
      "isAction": false,
      "childs": [
          {
              "id": "4a4d433e-f36b-1410-8bc6-0038e8a2eb3b",
              "level": "0201",
              "title": "Menu 2 [Accion]",
              "tooltip": "",
              "description": "",
              "link_url": "",
              "icon": "",
              "isAction": true,
              "childs": []
          }
      ]
  },
  {
      "id": "324d433e-f36b-1410-8bc6-0038e8a2eb3b",
      "level": "03",
      "title": "Menu 3",
      "tooltip": "",
      "description": "",
      "link_url": "",
      "icon": "",
      "isAction": false,
      "childs": [
          {
              "id": "384d433e-f36b-1410-8bc6-0038e8a2eb3b",
              "level": "0301",
              "title": "Menu 3.1",
              "tooltip": "",
              "description": "",
              "link_url": "",
              "icon": "",
              "isAction": false,
              "childs": []
          }
      ]
  }
  ]);

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