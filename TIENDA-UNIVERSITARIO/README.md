# 🏆 TIENDA UNIVERSITARIO

### Tienda virtual de artículos deportivos de Universitario de Deportes

<p align="center">
  <img src="assets/img/logo/logo-tienda.png" alt="Tienda Universitario" width="180">
</p>

<p align="center">
  <strong>Pasión crema. Tradición que se lleva puesta.</strong>
</p>

<p align="center">
  Proyecto web frontend desarrollado como propuesta de tienda virtual de artículos deportivos inspirados en Universitario de Deportes.
</p>

---

## 📌 Descripción

**Tienda Universitario** es una propuesta de comercio electrónico enfocada en la venta y exhibición de artículos deportivos, indumentaria y accesorios relacionados con Universitario de Deportes.

El proyecto busca desarrollar una experiencia de compra moderna, intuitiva y responsive, permitiendo al usuario explorar diferentes categorías, consultar productos, agregar artículos al carrito, gestionar favoritos y realizar un proceso de compra simulado.

La aplicación está desarrollada utilizando tecnologías frontend y una arquitectura organizada para separar la estructura, los estilos, la lógica y los datos del proyecto.

---

## 🎯 Objetivos

### Objetivo general

Desarrollar una tienda virtual moderna y responsive para la visualización y comercialización simulada de artículos deportivos relacionados con Universitario de Deportes.

### Objetivos específicos

* Diseñar una interfaz moderna y profesional.
* Crear una experiencia de usuario intuitiva.
* Organizar los productos mediante categorías.
* Implementar búsqueda y filtrado de productos.
* Implementar carrito de compras.
* Implementar sistema de favoritos.
* Crear una página individual para cada producto.
* Implementar un proceso de checkout.
* Crear una página de confirmación de compra.
* Adaptar la interfaz a dispositivos móviles.
* Separar los datos del contenido HTML mediante archivos JSON.
* Utilizar `LocalStorage` para conservar información del usuario durante la navegación.

---

## 🚀 Funcionalidades

### 🏠 Página de inicio

La página principal presenta:

* Hero principal.
* Banners promocionales.
* Productos destacados.
* Productos nuevos.
* Categorías principales.
* Ofertas.
* Accesos rápidos a las diferentes secciones.

---

### 🛍️ Catálogo de productos

El catálogo permite:

* Visualizar productos.
* Buscar productos.
* Filtrar por categoría.
* Ordenar productos.
* Consultar precios.
* Visualizar descuentos.
* Identificar productos nuevos.
* Acceder al detalle de cada producto.

---

### 👕 Categorías

La tienda está organizada en cuatro categorías principales:

| Categoría        | Descripción                                    |
| ---------------- | ---------------------------------------------- |
| 👕 Camisetas     | Camisetas oficiales, alternativas y retro      |
| 🏃 Entrenamiento | Polos, shorts, buzos y casacas                 |
| 🎒 Accesorios    | Gorras, bufandas, mochilas, llaveros y pelotas |
| ⭐ Colección      | Productos especiales, retro y de colección     |

---

### 🔎 Detalle del producto

Cada producto cuenta con información como:

* Nombre.
* Imagen.
* Precio.
* Precio anterior.
* Descripción.
* Tallas.
* Colores.
* Stock.
* Valoración.
* Número de reseñas.
* Estado del producto.
* Botón para agregar al carrito.
* Botón para agregar a favoritos.

---

### 🛒 Carrito de compras

El carrito permite:

* Agregar productos.
* Eliminar productos.
* Modificar cantidades.
* Visualizar subtotal.
* Calcular envío.
* Calcular total.
* Continuar hacia el checkout.

La información del carrito se almacena utilizando `LocalStorage`.

---

### ❤️ Favoritos

Los usuarios pueden guardar productos como favoritos y consultarlos posteriormente.

La información se conserva utilizando:

```javascript
localStorage
```

---

### 💳 Checkout

El proceso de checkout permite ingresar:

* Datos personales.
* Dirección de entrega.
* Método de envío.
* Método de pago.
* Resumen del pedido.

> ⚠️ El sistema de pago es únicamente simulado y no realiza transacciones reales.

---

### ✅ Confirmación

Después de completar el proceso de compra se muestra:

* Confirmación del pedido.
* Número de pedido.
* Resumen de compra.
* Información de entrega.
* Total pagado.

---

## 🧱 Arquitectura del proyecto

```text
TIENDA-UNIVERSITARIO/
│
├── README.md
│
├── paginas/
│   │
│   ├── style-global.css
│   ├── script-global.js
│   │
│   ├── inicio/
│   ├── productos/
│   ├── camisetas/
│   ├── entrenamiento/
│   ├── accesorios/
│   ├── coleccion/
│   ├── producto/
│   ├── carrito/
│   ├── favoritos/
│   ├── checkout/
│   ├── confirmacion/
│   ├── nosotros/
│   ├── contacto/
│   ├── login/
│   └── registro/
│
├── assets/
│   │
│   ├── img/
│   │   ├── logo/
│   │   ├── banners/
│   │   ├── productos/
│   │   │   ├── camisetas/
│   │   │   ├── entrenamiento/
│   │   │   ├── accesorios/
│   │   │   └── coleccion/
│   │   ├── categorias/
│   │   └── nosotros/
│   │
│   └── icons/
│
├── data/
│   ├── productos.json
│   ├── categorias.json
│   └── promociones.json
│
└── docs/
    ├── capturas/
    └── documentacion.md
```

---

## 💻 Tecnologías utilizadas

### HTML5

Utilizado para construir la estructura y contenido de las páginas.

### CSS3

Utilizado para:

* Diseño visual.
* Responsive Design.
* Flexbox.
* CSS Grid.
* Animaciones.
* Transiciones.
* Variables CSS.
* Componentes de interfaz.

### JavaScript

Utilizado para implementar:

* Interactividad.
* Eventos.
* Manipulación del DOM.
* Carrito de compras.
* Favoritos.
* Búsqueda.
* Filtros.
* Validaciones.
* `LocalStorage`.
* Consumo de archivos JSON.

### JSON

Utilizado para almacenar y organizar la información de:

* Productos.
* Categorías.
* Promociones.

---

## 🎨 Diseño UI/UX

El proyecto busca utilizar principios modernos de diseño de interfaces y experiencia de usuario.

### Características

* Diseño responsive.
* Navegación intuitiva.
* Jerarquía visual.
* Componentes reutilizables.
* Cards de productos.
* Estados hover.
* Microinteracciones.
* Feedback visual.
* Diseño mobile-first.
* Espaciado consistente.
* Tipografía legible.
* Contraste adecuado.

La interfaz está inspirada en el concepto visual de una tienda deportiva moderna, utilizando una identidad relacionada con los colores tradicionales de Universitario de Deportes.

---

## 📱 Responsive Design

La aplicación está diseñada para funcionar en diferentes dispositivos:

```text
┌───────────────────────────────┐
│          Desktop              │
│        1200px +               │
└───────────────────────────────┘

┌───────────────────────┐
│       Tablet          │
│     768px - 1199px    │
└───────────────────────┘

┌───────────────┐
│    Mobile     │
│   < 768px     │
└───────────────┘
```

Los componentes se adaptan automáticamente según el tamaño de pantalla.

---

## 📂 Organización de datos

Los productos se almacenan en:

```text
data/productos.json
```

Las categorías:

```text
data/categorias.json
```

Las promociones:

```text
data/promociones.json
```

Esta separación permite mantener los datos independientes de la estructura HTML.

---

## 💾 Persistencia con LocalStorage

El proyecto utiliza `LocalStorage` para mantener determinados datos durante la navegación.

### Carrito

```javascript
localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
);
```

### Favoritos

```javascript
localStorage.setItem(
    "favoritos",
    JSON.stringify(favoritos)
);
```

De esta manera, los datos permanecen disponibles incluso después de actualizar la página.

---

## 🔄 Flujo principal de navegación

```text
                         ┌──────────────┐
                         │    INICIO    │
                         └──────┬───────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        ┌───────────┐     ┌───────────┐     ┌────────────┐
        │ CATEGORÍAS│     │ PRODUCTOS │     │  OFERTAS   │
        └─────┬─────┘     └─────┬─────┘     └──────┬─────┘
              │                 │                  │
              └─────────────────┼──────────────────┘
                                ▼
                       ┌─────────────────┐
                       │    PRODUCTO     │
                       └────────┬────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
             ┌────────────┐          ┌────────────┐
             │ FAVORITOS  │          │  CARRITO   │
             └────────────┘          └─────┬──────┘
                                           │
                                           ▼
                                    ┌────────────┐
                                    │  CHECKOUT  │
                                    └─────┬──────┘
                                          │
                                          ▼
                                  ┌──────────────┐
                                  │ CONFIRMACIÓN │
                                  └──────────────┘
```

---

## 🗂️ Páginas disponibles

| Página        | Ruta              | Función                  |
| ------------- | ----------------- | ------------------------ |
| Inicio        | `/inicio/`        | Página principal         |
| Productos     | `/productos/`     | Catálogo general         |
| Camisetas     | `/camisetas/`     | Categoría camisetas      |
| Entrenamiento | `/entrenamiento/` | Categoría entrenamiento  |
| Accesorios    | `/accesorios/`    | Categoría accesorios     |
| Colección     | `/coleccion/`     | Productos especiales     |
| Producto      | `/producto/`      | Detalle del producto     |
| Carrito       | `/carrito/`       | Gestión del carrito      |
| Favoritos     | `/favoritos/`     | Productos guardados      |
| Checkout      | `/checkout/`      | Proceso de compra        |
| Confirmación  | `/confirmacion/`  | Resultado del pedido     |
| Nosotros      | `/nosotros/`      | Información de la tienda |
| Contacto      | `/contacto/`      | Formulario de contacto   |
| Login         | `/login/`         | Inicio de sesión         |
| Registro      | `/registro/`      | Creación de cuenta       |

---

## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Entrar al proyecto

```bash
cd TIENDA-UNIVERSITARIO
```

### 3. Abrir el proyecto en Visual Studio Code

```bash
code .
```

### 4. Ejecutar el proyecto

Se recomienda utilizar la extensión **Live Server** de Visual Studio Code.

Abrir:

```text
paginas/inicio/index.html
```

y seleccionar:

```text
Open with Live Server
```

---

## ⚠️ Consideraciones

Este proyecto es una implementación frontend y académica.

No incluye:

* Backend.
* Base de datos real.
* Pasarela de pagos real.
* Sistema de autenticación real.
* Gestión real de pedidos.
* Conexión con servicios externos.

Las funciones de carrito, favoritos, usuarios y compras se encuentran simuladas mediante JavaScript y `LocalStorage`.

---

## 📸 Capturas

Las capturas del proyecto se encuentran en:

```text
docs/capturas/
```

Ejemplo:

```text
docs/capturas/inicio.png
docs/capturas/productos.png
docs/capturas/carrito.png
docs/capturas/checkout.png
```

---

## 📚 Documentación

La documentación técnica del proyecto se encuentra en:

```text
docs/documentacion.md
```

---

## 👨‍💻 Autor

**Airton**

Proyecto académico de desarrollo web.

**Universidad Nacional Mayor de San Marcos**

Perú — 2026

---

## ⚽ Identidad del proyecto

```text
╔══════════════════════════════════════╗
║                                      ║
║       TIENDA UNIVERSITARIO           ║
║                                      ║
║       PASIÓN • HISTORIA • GLORIA     ║
║                                      ║
╚══════════════════════════════════════╝
```

> **La pasión por Universitario también se lleva puesta.** 🏆
