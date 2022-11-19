import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: '',
    balance: 0,
    income: 0,
    expense: 0,
  }

  onAdd = event => {
    event.preventDefault()
    const {balance, income, expense, title, amount, type} = this.state

    const newData = {
      id: v4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newData],
      title: '',
      amount: '',
      balance:
        type === 'Income'
          ? balance + parseInt(amount)
          : balance - parseInt(amount),
      income: type === 'Income' ? parseInt(amount) + income : income,
      expense: type === 'Income' ? expense : expense + parseInt(amount),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {transactionList, title, amount} = this.state

    return (
      <div className="bg-container">
        <div className="head-card">
          <h1 className="head-card-name">HI, Richard</h1>
          <p className="welcome-note">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails details={transactionList} />
        <div className="bottom-section">
          <form className="form-bg" onSubmit={this.onAdd}>
            <h1 className="bottom-section-heading">Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              value={title}
              onChange={this.onChangeTitle}
              className="input"
              placeholder="TITLE"
              id="title"
              type="text"
            />
            <br />
            <label htmlFor="title">AMOUNT</label>
            <br />
            <input
              onChange={this.onChangeAmount}
              value={amount}
              className="input"
              placeholder="AMOUNT"
              id="amount"
              type="text"
            />
            <br />
            <label htmlFor="type">TYPE</label>
            <br />
            <select onChange={this.onChangeType} className="input" id="type">
              <option value={transactionTypeOptions[0].displayText}>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].displayText}>
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <br />
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="right-div form-bg">
            <h1 className="bottom-section-heading">History</h1>
            <div className="list-head-row">
              <p className="list-row-p">Title</p>
              <p className="list-row-p">Amount</p>
              <p className="list-row-p">Type</p>
            </div>
            <ul className="list-ul">
              {transactionList.map(each => (
                <TransactionItem key={each.id} details={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
