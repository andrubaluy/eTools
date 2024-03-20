import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
    {name:"Taladro inalambrico 650W", img:"https://i.imgur.com/rtaS1CC.jpg", price:1640, category:"electricas", description:"TALADRO PERCUTOR 650W 13MM", stock: 22},
    {name:"Nivel 80 cm", img:"https://i.imgur.com/JJc3IPz.jpg", price:280, category:"manuales", description:"NIVEL DE 80 CM", stock: 54},
    {name:"Martillo de uña", img:"https://i.imgur.com/I2O7FxD.jpeg", price:249, category:"manuales", description:"", stock: 121},
    {name:"Alicate 6'", img:"https://i.imgur.com/cWr640P.jpg", price:160, category:"manuales", description:"ALICATE CORTE DIAGONAL 6", stock: 233},
    {name:"Llave inglesa", img:"https://i.imgur.com/cWOfWZR.jpg", price:538, category:"manuales", description:"LLAVE INGLESA", stock: 43},
    {name:"Pinza Pico de loro", img:"https://i.imgur.com/OlZCAc6.png", price:280, category:"manuales", description:"PINZA PICO LORO 10 50MM", stock: 73},
    {name:"Set Llave Allen", img:"https://i.imgur.com/pmEidGv.jpg", price:189, category:"manuales", description:"SET DE LLAVES ALEN  1.5MM - 10MM", stock: 12},
    {name:"Destornilladores", img:"https://i.imgur.com/79J71FZ.jpg", price:224, category:"manuales", description:"SET 6 DESTORNILLADORES", stock: 74},
    {name:"Serrucho", img:"https://i.imgur.com/W7vC6qe.jpg", price:260, category:"manuales", description:"SERRUCHO DE MANO 18", stock: 93},
    {name:"Cinta Metrica", img:"https://i.imgur.com/U4QZXwo.jpg", price:50, category:"manuales", description:"CINTA METRICA 3MT X 16MM", stock: 34},
    {name:"Trincheta", img:"https://i.imgur.com/23HdqWB.jpg", price:43, category:"manuales", description:"TRINCHETA 18MM X 100MM", stock: 44},
    {name:"Caja de Herramientas", img:"https://i.imgur.com/Hk770Rz.jpg", price:302, category:"organizador", description:"CAJA PLASTICA DE HERRAMIENTAS 13", stock: 48},
    {name:"Organizador de Tornillos", img:"https://i.imgur.com/8wG9hra.png", price:1064, category:"organizador", description:"ORGANIZADOR MODULAR TRANSPARENTE 380X155X320MM C GAVETAS", stock: 67},
    {name:"Rotopercutor", img:"https://i.imgur.com/o8xI3Mc.jpg", price:44226, category:"electricas", description:"MARTILLO ROTOPERCUTOR BOSCH", stock: 95},
    {name:"Amoladora", img:"https://i.imgur.com/0q91JlQ.jpg", price:2524, category:"electricas", description:"AMOLADORA ANGULAR 4½ INGCO 850W", stock: 23},
    {name:"Ingletadora", img:"/Content/Images/Ingletadora.jpg", price:5200, category:"electricas", description:"INGLETADORA 850w ECO 190mm DISCO", stock: 42},
    {name:"Taladro de Banco", img:"/Content/Images/taladro_banco.jpg", price:6600, category:"electricas", description:"TALADRO DE BANCO 13MM INGCO 350W 580-2650 RPM", stock: 8},
    {name:"Martillo de pena", img:"/Content/Images/martillo_de_pena.jpg", price:160, category:"manuales", description:"MARTILLO DE PENA 300GR", stock: 76}
];



export const seedProducts = () => {
    

    products.forEach( prod => {
        addDoc(collection(db, "Products"), prod);
    })

};