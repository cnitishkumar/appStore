import './index.css'

const TabItem = props => {
  const {tabDetails, onClickCategory, isActiveTab} = props
  const {tabId, displayText} = tabDetails
  const onClickCategoryBtn = () => {
    onClickCategory(tabId)
  }
  const activeTabClassName = isActiveTab ? 'button active-tab ' : 'button'
  return (
    <li className="list-item">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickCategoryBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
