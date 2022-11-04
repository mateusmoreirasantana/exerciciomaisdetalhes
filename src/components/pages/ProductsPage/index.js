import { useState } from "react";

import Header from "../../Header";
import Products from "../../Products";
import CashRegister from "../../CashRegister";

export default function ProductsPage() {
  const [total, setTotal] = useState(0);

  return (
    <main>
      <Header />
      <Products
        updateTotalPrice={(price) => setTotal(total + price)}
      />
      <CashRegister total={total} />
    </main>
  )
}