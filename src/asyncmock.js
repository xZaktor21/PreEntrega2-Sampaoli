const productos = [
    { nombre: "GTX 1660 Super", precio: 205000, id: "1", img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35211_Placa_de_Video_ASUS_GeForce_GTX_1660_SUPER_6GB_GDDR6_OC_TUF_91e6cd72-grn.jpg", idCat: "2" },
    { nombre: "Radeon RX 6700 XT", precio: 220000, id: "2", img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26063_Placa_de_Video_Asrock_Radeon_RX_6700_XT_12GB_GDDR6_Challenger_efb7c2af-grn.jpg", idCat: "2" },
    { nombre: "AMD Ryzen 5 5600X", precio: 138000, id: "3", img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg", idCat: "3" },
    { nombre: "Intel Core i5 11600KF", precio: 140000, id: "4", img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25669_Procesador_Intel_Core_i5_11600KF_4.9GHz_Turbo_Socket_1200_Rocket_Lake_43e506c7-grn.jpg", idCat: "3" },
    { nombre: "GeiL DDR4 16GB (2x8GB) 3200MHz Orion Black CL22", precio: 45000, id: "5", img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33456_Memoria_GeiL_DDR4_16GB__2x8GB__3200MHz_Orion_Black_CL22_beecd300-grn.jpg", idCat: "4" },
    { nombre: "Adata DDR4 (2x8GB) 16GB 5000MHz XPG Spectrix D50 Xtreme RGB CL19", precio: 340000, id: "6", img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29885_Memoria_Adata_DDR4__2x8GB__16GB_5000MHz_XPG_Spectrix_D50_Xtreme_RGB_CL19_18133a6d-grn.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}