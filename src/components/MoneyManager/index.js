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
    const {title, amount, type} = this.state
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
    }))

    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    }
    if (type === 'Expenses') {
      this.setState(prevState => ({
        expense: prevState.expense + parseInt(amount),
        balance: prevState.balance - parseInt(amount),
      }))
    }
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

  onDeleteBtnClick = id => {
    const {transactionList} = this.state
    const details = transactionList.filter(each => each.id === id)
    const transcType = details[0].type
    const transcAmount = details[0].amount
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
    }))

    if (transcType === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance - transcAmount,
        income: prevState.income - transcAmount,
      }))
    }
    if (transcType === 'Expenses') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(transcAmount),
        expense: prevState.expense - transcAmount,
      }))
    }

    console.log('dlt-clicked', id)
  }

  render() {
    const {
      transactionList,
      balance,
      income,
      expense,
      title,
      amount,
    } = this.state

    return (
      <div className="bg-container">
        <div className="head-card">
          <h1 className="head-card-name">HI, Richard</h1>
          <p className="welcome-note">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expense={expense} />
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
              <option value={transactionTypeOptions[0].optionId} defaultValue>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].optionId}>
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
                <TransactionItem
                  key={each.id}
                  details={each}
                  onDeleteBtnClick={this.onDeleteBtnClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
