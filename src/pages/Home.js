import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStorage';
import Layout from '../components/Layout/';
import Products from '../components/Products/';
import Toast from '../components/Toast';

const Home = () => {
  const { toast, handleCloseToast } = useContext(GlobalContext);

  return (
    <Layout>
      <Products />

      {toast.open && (
        <Toast
          open={toast.open}
          message={toast.message}
          severity={toast.severity}
          handleCloseToast={handleCloseToast}
        />
      )}
    </Layout>
  );
};

export default Home;
