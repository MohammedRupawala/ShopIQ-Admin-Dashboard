
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
const NewProduct = lazy(() => import('./pages/Management/NewProduct'));
const  ProductManagement = lazy(()=>import( './pages/Management/ProductManagement'));
const TransactionManage = lazy(()=>import('./pages/Management/TransactionManage'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Products = lazy(() => import('./pages/products'));
const Customer = lazy(() => import('./pages/Customer'));
const Transaction = lazy(() => import('./pages/Transaction'));
const BarChart = lazy(() => import('./pages/Charts/BarChart'));
const PieChart = lazy(() => import('./pages/Charts/PieChart'));
const LineChart = lazy(() => import('./pages/Charts/LineChart'));
const CouponGenerator = lazy(() => import('./pages/Apps/CouponGenerator'));
const Toss = lazy(() => import('./pages/Apps/Toss'));
const StopWatch = lazy(() => import('./pages/Apps/StopWatch'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* {Dashboard Routes} */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          {/*Management Routes*/}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/Transaction/:id" element={<TransactionManage />} />
          {/* Charts Routes */}
          <Route path="/admin/charts/bar" element={<BarChart />} />
          <Route path="/admin/charts/pie" element={<PieChart />} />
          <Route path="/admin/charts/line" element={<LineChart />} />
          {/* Apps Routes */}
          <Route path="/admin/apps/stopwatch" element={<StopWatch />} />
          <Route path="/admin/apps/coupongenerator" element={<CouponGenerator />} />
          <Route path="/admin/apps/toss" element={<Toss />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;