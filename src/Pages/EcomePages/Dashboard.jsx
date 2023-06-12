import React from 'react'
import Layout from '../../components/EcomComponents/Layout/Layout'
import Info from '../../components/EcomComponents/DashboardComp/Info/Info'
import Sales from '../../components/EcomComponents/DashboardComp/ItemSales/Sales'
import LineChart from '../../components/EcomComponents/DashboardComp/Chart/Line'
import Product from '../../components/EcomComponents/DashboardComp/productItem/Product'
import Statistic from '../../components/EcomComponents/DashboardComp/Statistic/Statistic'
import Comments from '../../components/EcomComponents/DashboardComp/Comments/Comments'
import HomeNav from '../../components/EcomComponents/HomeNav/HomeNav'
const Dashboard = () => {


  return (
    <Layout >
      <HomeNav title={"Vender Dashboard"} />
      <Info />
      <Sales />
      <LineChart />
      <Product />
      <Statistic />
      <Comments />
      <LineChart type={"total"} />
    </Layout>
  )
}

export default Dashboard