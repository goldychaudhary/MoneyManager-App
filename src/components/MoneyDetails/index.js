import './index.css'

const MoneyDetails = props => {
  const {details} = props
  console.log(details)
  const {id, balance, income, expense} = details
  console.log('in details ', id, balance, income, expense)

  return (
    <div className="list-container">
      <div className="balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
        />
        <div>
          <p className="your-balance">Your Balance</p>
          <p className="amount">Rs {balance}</p>
        </div>
      </div>
      <div className="balance income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="your-balance">Your Income</p>
          <p className="amount">Rs {income}</p>
        </div>
      </div>
      <div className="balance expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="your-balance">Your Expenses</p>
          <p className="amount">Rs {expense}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
