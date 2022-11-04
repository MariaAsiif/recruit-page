import React from 'react'
import Layout from '../../components/EcomComponents/Layout/Layout'
import Info from '../../components/EcomComponents/DashboardComp/Info/Info'
import Sales from '../../components/EcomComponents/DashboardComp/ItemSales/Sales'
import LineChart from '../../components/EcomComponents/DashboardComp/Chart/Line'
import Product from '../../components/EcomComponents/DashboardComp/productItem/Product'
const Dashboard = () => {


    return (
        <Layout homenav={true}>
          <Info/>
          <Sales/>
          <LineChart/>
          <Product/>
        </Layout>
    )
}

export default Dashboard