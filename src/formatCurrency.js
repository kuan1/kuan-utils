/**
 * 格式化货币
 * @param num {string || number}
 * @returns {string}
 */
export function formatCurrency(num) {
  return (+num || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default formatCurrency
