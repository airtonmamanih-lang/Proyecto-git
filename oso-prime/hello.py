def saludar(nombre):
    return f"Hola, {nombre}!"

def despedirse(nombre):
    return f"Adiós, {nombre}!"

if __name__ == "__main__":
    nombre_usuario = input("¿Cómo te llamas? ")
    mensaje = saludar(nombre_usuario)
    print(mensaje)

print("Juan Luis Madueño Gil")

