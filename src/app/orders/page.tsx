import React from "react";

const OrdersPage = () => {
  return (
    <div className="flex">
      <div className="w-1/4 p-4 border-r">
        {/* Lista de Pedidos */}
        <h2 className="text-xl font-bold mb-4">Pedidos</h2>
        <ul>{/* Lista de pedidos será renderizada aqui */}</ul>
      </div>
      <div className="w-3/4 p-4">
        {/* Detalhes do Pedido */}
        <h2 className="text-xl font-bold mb-4">Detalhes do Pedido</h2>
        {/* Formulário para adicionar e visualizar pedidos */}
      </div>
    </div>
  );
};

export default OrdersPage;
