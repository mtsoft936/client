import React, { useEffect, useState } from 'react';


import { useAuth } from "../../../contexts/AuthContext";
import { getSection } from '../../../api/section.api';
import Loader from '../../Content/Loader';


export default function Content() {
  const { token, account } = useAuth();
  const [sectionData, SetsectionData] = useState([]);
  const [loading, Setloading] = useState(true);

  const getsectionItem = async () => {
    if (token && account) {
      const result = await getSection({ tenantId: (JSON.parse(account)).tenants[0].id, token: token });
      SetsectionData((result.data)?.filter((item: any) => item.visible === true));
      Setloading(false);
    }
  }
  useEffect(() => {
    getsectionItem();
  }, []);

  useEffect(() => {
    Setloading(false)
  }, [sectionData]);

  return (
    <div>
      <div className="font-sans text-3xl font-bold p-5">
        Hola, GMO Solutions 👏
      </div>
      <div className="flex flex-wrap p-5">
        {sectionData?.map((item: any) => (
          <div className="bg-gray-100 hover:bg-green-300 w-[22%] mr-[1.5%] ml-[1.5%] rounded-2xl mt-2 mb-2">
            <div className='text-center text-4xl mt-5 text-red-300'>
              <i className={item.icon}></i>
            </div>
            <div className="text-2xl font-bold text-center mt-5">{item.description}</div>
            <div className="text-center mt-5 mb-[30px]">{item.long_description}</div>
          </div>
        )
        )}

      </div>
    </div>
  )
}
