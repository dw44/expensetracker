import React from 'react'

const NewTransaction = () => {
  return (
    <div>
      <h3>New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount<br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter Amount" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default NewTransaction;