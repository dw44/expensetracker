import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transactions from './components/Transactions';
import NewTransaction from './components/NewTransaction';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
