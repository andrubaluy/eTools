import { useState } from "react"

export const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

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
    <div className="justify-content-center align-content-center p-4">
      <div>
        <button className="btn btn-outline-secondary mx-3" onClick={decrease}>
          -
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary mx-3" onClick={increase}>
          +
        </button>
      </div>
      <button className="btn btn-outline-primary mt-2" >
        Añadir
      </button>
    </div>
  )
}
