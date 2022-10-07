import React, { useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { ViewTableContainer } from './StyleTable'
import logo from "../../../../assets/landingImages/tickerlogo.png";
import axios from 'axios';

const SalesTable = () => {

    useEffect(() => {
      const apiFetch = async () => {
        const options = {
            method: 'GET',
            url: 'https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/brands/asasa/edibles',
            headers: {
              'X-RapidAPI-Key': '74c6a59e06msha26a52b45fe145fp118b28jsn4b367836b750',
              'X-RapidAPI-Host': 'brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com'
            }
          };
          
        await axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
      }
      apiFetch()
    },[])
    return (
        <div className='bscontainer-fluid'>
            <ViewTableContainer>

                <h2>Popular Cannabis </h2>


                <Table style={{ border: 'none' }} >
                    <thead >
                        <tr >
                            <th>Name</th>
                            <th className="price">Last Price</th>
                            <th className="chang">24h Change</th>
                            <th className="charge">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table_row">
                                <img src={logo} style={{ width: '20px', marginTop:'-15px'}} alt="logo" />
                                <h2>BNB</h2>
                            </td>
                            <td className="price">$277.9</td>
                            <td className="chang">+0.65%</td>
                            <td className="charge">$44,345M</td>
                        </tr>
                        <tr>
                            <td className="table_row">
                                <img src={logo} style={{ width: '20px', marginTop:'-15px' }} alt="logo" />
                                <h2>BNB</h2>
                            </td>
                            <td className="price">$277.9</td>
                            <td className="chang">+0.65%</td>
                            <td className="charge">$44,345M</td>
                        </tr>
                        <tr>
                            <td className="table_row">
                                <img src={logo} style={{ width: '20px', marginTop:'-15px' }} alt="logo" />
                                <h2>BNB</h2>
                            </td>
                            <td className="price"> $277.9</td>
                            <td className="chang">+0.65%</td>
                            <td className="charge">$44,345M</td>
                        </tr>
                    </tbody>
                </Table>
            </ViewTableContainer>
        </div>
    )
}

export default SalesTable