import {useEffect, useState} from "react";
import axios from 'axios';
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getData() {

        const BEARER_TOKEN =
            'xh7xaQHwZkiZTlkMLbsEq_csss-ORwRCiPkcLTaOJ_orouDKtJbylslvsxOkbtgAmbDNy9eHTQHWh-_x3wNUAXkLApPjfKFa0zd9iHwvgwq6gG9-K3pKDCuxXXxiY3Yx';
        const data = await axios
            .get(
                `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Alpharetta&term=ice+cream+shop&limit=5`, {
                    headers: {
                        Authorization: `Bearer ${BEARER_TOKEN}`,
                    }
                },
            )
    
            .then(json => {
                console.log(json);
                setItems(json.data.businesses);
    
            })
            .catch(err => {
                console.log(err);
            });
    
    
    }
    getData();
    
  }, []);
  
  return (
    <div>
<section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div className="flex flex-col justify-center h-full">
  
        <div className="w-1/2  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Top Five Ice Cream Shops In Alpharetta</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                            <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">S.No</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Image</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Shop Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Review Count</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Rating</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Phone</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                        {items.length>0 && items.map((item, index) => {
                          return (
                             <tr>
                             <td className="p-2  whitespace-nowrap">
                             <div className="text-left">{index+1}</div>
                             </td>
                             <td>
                             <img class="object-cover h-12 w-12" src={item.image_url} alt="shop"/>
                             </td>
                             <td className="p-2 whitespace-nowrap">
                                 <div className="text-left">{item.name}</div>
                             </td>
                             <td className="p-2 whitespace-nowrap">
                                 <div className="text-left">{item.review_count}</div>
                             </td>
                             <td className="p-2 whitespace-nowrap">
                                 <div className="text-left font-medium text-red-500">{item.rating}</div>
                             </td>
                             <td className="p-2 whitespace-nowrap">
                                 <div className="text-lg text-left text-green-500">{item.phone}</div>
                             </td>
                         </tr>);
                          })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default App;
