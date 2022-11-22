import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props

  return (
    <div className="list-container">
      <div className="balance">
        <div className="img-bg">
          <img
            className="b-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance"
          />
        </div>
        <div className="balance-para-content">
          <p className="your-balance">Your Balance</p>
          <p testid="balanceAmount" className="amount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="balance income">
        <div className="img-bg">
          <img
            className="b-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div>
          <p className="your-balance">Your Income</p>
          <p testid="incomeAmount" className="amount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="balance expenses">
        <div className="img-bg">
          <img
            className="b-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p className="your-balance">Your Expenses</p>
          <p testid="expensesAmount" className="amount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
