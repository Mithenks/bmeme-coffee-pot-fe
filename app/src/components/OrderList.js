import React from "react"

const OrderList = ({ orders }) => {
  console.log("orders", orders)

  return (
    <>
      <h3>Orders data</h3>
      <div>
        <p>Orders size(): {orders.length}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.crystallize_orders.customer.addresses[0].email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default OrderList
