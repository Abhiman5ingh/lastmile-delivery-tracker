function OrderCard({ order, children }) {
  return (
    <div className="card mb-3 shadow-sm">

      <div className="card-body">

        <h5>Order #{order._id}</h5>

        <p>
          <b>Status:</b> {order.status}
        </p>

        <p>
          <b>Weight:</b> {order.weight} kg
        </p>

        <p>
          <b>Price:</b> ₹{order.price}
        </p>

        {children}

      </div>
    </div>
  );
}

export default OrderCard;