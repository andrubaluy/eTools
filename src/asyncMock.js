const products = [
    {id: "1", name:"Taladro", img:"url-img", price:100, category:"electricas", description:"", stock: 10},
    {id: "2", name:"Nivel", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "3", name:"Martillo", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "4", name:"Alicate", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "5", name:"Llave inglesa", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "6", name:"Llave Pico de loro", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "7", name:"Set Llave Allen", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "8", name:"Destornilladores", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "9", name:"Serrucho", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "10", name:"Cinta Metrica", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "11", name:"Trincheta", img:"url-img", price:100, category:"manuales", description:"", stock: 10},
    {id: "12", name:"Caja de Herramientas", img:"url-img", price:100, category:"organizador", description:"", stock: 10},
    {id: "13", name:"Organizador de Tornillos", img:"url-img", price:100, category:"organizador", description:"", stock: 10},
    {id: "14", name:"Percutor", img:"url-img", price:100, category:"electricas", description:"", stock: 10},
    {id: "15", name:"Amoladora", img:"url-img", price:100, category:"electricas", description:"", stock: 10},
    {id: "16", name:"Ingletadora", img:"url-img", price:100, category:"electricas", description:"", stock: 10}
];


export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if(products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        }else {
            reject("No hay productos");
        }
    });
}

export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        if(products.length > 0) {
            const retProduct = products.find(p => p.id === id);
            setTimeout(() => {
                if (!retProduct) {
                    reject(`No hay producto con el Id ${id}` ); 
                }else{
                    resolve(retProduct);
                }
            }, 1000)
        }else {
            reject("No hay productos");
        }
    });
}