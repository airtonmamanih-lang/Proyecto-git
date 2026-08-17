import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# 1. Configuración básica del gráfico
plt.style.use('dark_background')  # Fondo negro para que resalten los colores
fig, ax = plt.subplots(figsize=(8, 6))

# Creamos los datos del eje X (puntos de la onda)
x = np.linspace(0, 4 * np.pi, 200)

# Inicializamos una línea vacía que luego iremos modificando
line, = ax.plot(x, np.sin(x), color='cyan', lw=3)

# Configuración de los límites de la pantalla
ax.set_ylim(-1.5, 1.5)
ax.set_title("Onda Dinámica Simplificada", color='white', fontsize=14)
ax.axis('off')  # Oculta las líneas de los ejes para un diseño más limpio

# 2. Función de actualización (se ejecuta en cada fotograma)
def update(frame):
    # El 'frame' aumenta en cada paso, lo usamos como velocidad/tiempo
    velocidad = frame * 0.1
    
    # Calculamos el nuevo valor de Y desplazando la onda en el tiempo
    y = np.sin(x + velocidad)
    
    # Actualizamos los datos de la línea
    line.set_ydata(y)
    
    return line,

# 3. Crear la animación
# interval=20 significa que se actualiza cada 20 milisegundos (va más rápido)
ani = FuncAnimation(fig, update, frames=100, interval=20, blit=True)

plt.show()