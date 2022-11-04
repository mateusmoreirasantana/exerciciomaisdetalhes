export default function CashRegister({ total }) {
  return <p>Total da compra: R$ {total.toFixed(2)}</p>
}