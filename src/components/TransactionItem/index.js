import './index.css'

const TransactionItem = props => {
  const {details} = props
  const {title, amount, type} = details

  return (
    <li className="listItem">
      <p className="list-row-p">{title}</p>
      <p className="list-row-p">Rs {amount}</p>
      <p className="list-row-p">{type}</p>
    </li>
  )
}
export default TransactionItem
