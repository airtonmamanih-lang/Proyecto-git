import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from scipy.ndimage import gaussian_filter

# 1. Configuración del lienzo y estilo visual (Fondo Negro de Alta Densidad)
plt.style.use('dark_background')
fig, ax = plt.subplots(figsize=(10, 8))
fig.canvas.manager.set_window_title('Simulación Dinámica: Tormenta Cuántica')

# Límites del plano
N_PARTICULAS = 150
x = np.linspace(-4, 4, N_PARTICULAS)
y = np.linspace(-4, 4, N_PARTICULAS)
X, Y = np.meshgrid(x, y)

# Inicialización de los elementos gráficos que se van a animar
# Usamos un gráfico de dispersión (Scatter) para las partículas cuánticas
scatter = ax.scatter([], [], c=[], cmap='plasma', alpha=0.6, edgecolors='none')

# Usamos un gráfico de líneas para las "cuerdas" de energía del fondo
lines = [ax.plot([], [], color='cyan', alpha=0.15, lw=1)[0] for _ in range(15)]

# Configuración estética del eje
ax.set_xlim(-4, 4)
ax.set_ylim(-4, 4)
ax.set_aspect('equal')
ax.axis('off') # Ocultamos los ejes para mayor inmersión visual
title = ax.set_title("Campo Dinámico t = 0.00", fontsize=14, color='white', fontname='monospace')

# 2. Función de inicialización de la animación
def init():
    scatter.set_offsets(np.empty((0, 2)))
    for line in lines:
        line.set_data([], [])
    return [scatter] + lines + [title]

# 3. Función de actualización cuadro por cuadro (El motor dinámico)
def update(frame):
    # El 'frame' actúa como nuestra variable de tiempo (t)
    t = frame * 0.05
    
    # --- FÍSICA DE LA SIMULACIÓN ---
    # Usamos NumPy para calcular campos de ondas trigonométricas desfasadas
    R = np.sqrt(X**2 + Y**2)
    # Campo de distorsión usando Scipy para suavizar interferencias (efecto fluido)
    z_raw = np.sin(X*1.5 + t) * np.cos(Y*1.5 - t*0.7) * np.cos(R - t)
    Z = gaussian_filter(z_raw, sigma=1.2) # Suavizado matemático de alta fidelidad
    
    # Extraer posiciones dinámicas para el Scatter flotante
    # Seleccionamos una muestra dispersa de puntos que orbitan en el campo
    mask = (R > 0.5) & (R < 3.5)
    px = X[mask][::5] + np.sin(Y[mask][::5] + t) * 0.2
    py = Y[mask][::5] + np.cos(X[mask][::5] * 0.5 + t) * 0.2
    
    # Dinámica de color y tamaño basada en la densidad del campo cuántico
    p_colors = Z[mask][::5]
    p_sizes = (np.sin(px + t) + 1.5) * 25
    
    # --- ACTUALIZACIÓN DE GRÁFICOS ---
    # Actualizamos las partículas
    scatter.set_offsets(np.c_[px, py])
    scatter.set_array(p_colors)
    scatter.set_sizes(p_sizes)
    
    # Actualizamos las líneas de energía del fondo (Cuerdas de campo)
    for i, line in enumerate(lines):
        # Cada línea sigue una función matemática desfasada en el espacio-tiempo
        offset = i * 0.4
        ly = np.sin(x + t + offset) * np.cos(x*0.5 - t) * 2
        line.set_data(x, ly)
    
    # Actualizar el contador de tiempo en el título
    title.set_text(f"Campo Dinámico Cuántico | t = {t:.2f}s")
    
    # Retornamos todos los elementos modificados para que Matplotlib los redibuje eficazmente
    return [scatter] + lines + [title]

# 4. Construcción de la Animación Global
# blit=True optimiza el rendimiento dibujando solo las partes del gráfico que cambian
ani = FuncAnimation(fig, update, frames=200, init_func=init, blit=True, interval=30)

plt.show()