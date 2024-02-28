import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map(p => <Item key={p.id} {...p} />  )}
    </div>
  );
};
