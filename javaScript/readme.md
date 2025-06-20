¡Perfecto! Aquí tienes los 10 problemas de programación en JavaScript, formateados como un archivo `README.md` para que puedas usarlos fácilmente.

---

# Problemas de Programación JavaScript Básico

Este repositorio contiene 10 problemas de programación en JavaScript diseñados para practicar los fundamentos del lenguaje, incluyendo tipos de datos, operadores (aritméticos, de comparación), condicionales (`if`, `else`, `else if`, `switch`, ternario) y el uso de la librería `Math`.

¡Buena suerte resolviéndolos!

---

## Problemas

### Problema 1: Calculadora de Descuento

Crea una función llamada **`calcularDescuento`** que reciba dos parámetros: **`precioOriginal`** (un número) y **`porcentajeDescuento`** (un número entre 0 y 100). La función debe devolver el precio final después de aplicar el descuento. Si el porcentaje de descuento no es válido (menor que 0 o mayor que 100), la función debe devolver un mensaje de error como: "El porcentaje de descuento no es válido".

### Problema 2: Clasificador de Edades

Escribe una función llamada **`clasificarEdad`** que tome un número entero **`edad`** como argumento. La función debe devolver:
* "Niño" si la edad es menor de 13.
* "Adolescente" si la edad está entre 13 y 17 (inclusive).
* "Adulto" si la edad es 18 o mayor.

### Problema 3: Par o Impar

Crea una función llamada **`esParOImpar`** que reciba un número entero. La función debe devolver la cadena "Es par" si el número es par, y "Es impar" si el número es impar. Usa el operador módulo.

### Problema 4: Área de un Triángulo

Escribe una función llamada **`calcularAreaTriangulo`** que reciba dos parámetros: **`base`** y **`altura`**. Ambos son números. La función debe devolver el área del triángulo. Si alguno de los valores es negativo o cero, la función debe devolver: "La base y la altura deben ser valores positivos."

### Problema 5: Mayor de Tres Números

Crea una función llamada **`encontrarMayor`** que reciba tres números como argumentos. La función debe devolver el número más grande de los tres. No utilices arreglos.

### Problema 6: Conversor de Temperatura

Diseña una función llamada **`convertirTemperatura`** que reciba dos parámetros: **`valor`** (un número) y **`unidad`** (una cadena, puede ser "C" para Celsius o "F" para Fahrenheit). La función debe convertir el valor a la otra unidad.
* Si la unidad es "C", convierte a Fahrenheit ($$F = C \times 9/5 + 32$$).
* Si la unidad es "F", convierte a Celsius ($$C = (F - 32) \times 5/9$$).
* Si la unidad no es "C" ni "F", devuelve "Unidad no válida".

### Problema 7: Calculadora de Índice de Masa Corporal (IMC)

Crea una función llamada **`calcularIMC`** que reciba **`peso`** (en kilogramos) y **`altura`** (en metros). La función debe devolver el IMC ($$IMC = peso / (altura \times altura)$$). Además, la función debe clasificar el IMC y devolver:
* "Bajo peso" si IMC < 18.5
* "Normal" si 18.5 <= IMC < 24.9
* "Sobrepeso" si 25 <= IMC < 29.9
* "Obesidad" si IMC >= 30
Considera casos donde el peso o la altura sean no válidos (cero o negativos) y devuelve un mensaje de error.

### Problema 8: Día de la Semana (Usando Switch)

Escribe una función llamada **`obtenerNombreDia`** que reciba un número del 1 al 7 (donde 1 es Lunes y 7 es Domingo). La función debe devolver el nombre del día correspondiente. Utiliza una estructura **`switch`**. Si el número no está en el rango, devuelve "Número de día no válido".

### Problema 9: Redondeo Especial

Crea una función llamada **`redondearNumero`** que reciba un número decimal. La función debe redondear el número:
* Al entero más cercano si la parte decimal es .5 o mayor (ej. 3.5 -> 4, 3.7 -> 4).
* Hacia abajo si la parte decimal es menor que .5 (ej. 3.4 -> 3).
* **Pista:** Investiga los métodos de la librería **`Math`** para lograr esto.

### Problema 10: Comparación de Cadenas Ignorando Mayúsculas/Minúsculas

Escribe una función llamada **`compararCadenas`** que reciba dos cadenas de texto. La función debe devolver `true` si las cadenas son iguales, ignorando si están en mayúsculas o minúsculas, y `false` en caso contrario. Por ejemplo, "Hola" y "hola" deberían considerarse iguales.

---