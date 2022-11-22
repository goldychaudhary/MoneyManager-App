import './index.css'

const TransactionItem = props => {
  const {details, onDeleteBtnClick} = props
  const {id, title, amount, type} = details

  const onDelete = () => {
    onDeleteBtnClick(id)
  }

  return (
    <li className="listItem">
      <p className="list-row-p">{title}</p>
      <p className="list-row-p">Rs {amount}</p>
      <p className="list-row-p">{type}</p>
      <button
        testid="delete"
        onClick={onDelete}
        className="dlt-btn"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
