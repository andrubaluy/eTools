import { useState } from "react"

export const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock){
            return setCount(count + 1);
        }
        setCount(count);
    }

    const decrease = () => {
        if (count === 0) {
            return setCount(0);
        }
        setCount(count - 1);
    }

    
  return (
    <div className="p-4 row">
      <div>
        <button className="btn btn-outline-secondary mx-4" onClick={decrease}>
          -
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary mx-4" onClick={increase}>
          +
        </button>
      </div>
      <button className="btn btn-success btn-block mt-4" onClick={() => onAdd(count)}>
        Añadir
      </button>
    </div>
  )
}
