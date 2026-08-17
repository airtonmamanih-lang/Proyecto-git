import turtle

# Configurar ventana
pantalla = turtle.Screen()
pantalla.title("Animación en Python")
pantalla.bgcolor("white")

# Crear figura
circulo = turtle.Turtle()
circulo.shape("circle")
circulo.color("blue")
circulo.penup()

# Animación
x = -300

while True:
    circulo.goto(x, 0)
    x += 2

    if x > 300:
        x = -300

    pantalla.update()