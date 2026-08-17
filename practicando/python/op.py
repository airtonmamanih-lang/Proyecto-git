import tkinter as tk
from tkinter import ttk
from tkinter import messagebox


class Aplicacion:
    def __init__(self, root):
        self.root = root
        self.root.title("Sistema de Gestión Avanzado")
        self.root.geometry("1000x600")
        self.root.minsize(900, 500)

        # Estilo
        self.style = ttk.Style()
        self.style.theme_use("clam")

        self.crear_menu()
        self.crear_layout()
        self.crear_barra_estado()

    def crear_menu(self):
        menubar = tk.Menu(self.root)

        archivo = tk.Menu(menubar, tearoff=0)
        archivo.add_command(label="Nuevo")
        archivo.add_command(label="Abrir")
        archivo.add_separator()
        archivo.add_command(label="Salir", command=self.root.quit)

        ayuda = tk.Menu(menubar, tearoff=0)
        ayuda.add_command(
            label="Acerca de",
            command=lambda: messagebox.showinfo(
                "Información",
                "Sistema creado con Tkinter"
            )
        )

        menubar.add_cascade(label="Archivo", menu=archivo)
        menubar.add_cascade(label="Ayuda", menu=ayuda)

        self.root.config(menu=menubar)

    def crear_layout(self):

        # Frame principal
        main_frame = ttk.Frame(self.root)
        main_frame.pack(fill="both", expand=True)

        # Panel lateral
        sidebar = ttk.Frame(main_frame, width=200)
        sidebar.pack(side="left", fill="y", padx=5, pady=5)

        ttk.Label(
            sidebar,
            text="Panel de Control",
            font=("Arial", 14, "bold")
        ).pack(pady=10)

        ttk.Button(
            sidebar,
            text="Agregar",
            command=self.agregar
        ).pack(fill="x", pady=5)

        ttk.Button(
            sidebar,
            text="Eliminar"
        ).pack(fill="x", pady=5)

        ttk.Button(
            sidebar,
            text="Actualizar"
        ).pack(fill="x", pady=5)

        ttk.Progressbar(
            sidebar,
            mode="determinate",
            value=75
        ).pack(fill="x", pady=30)

        # Área principal
        content = ttk.Frame(main_frame)
        content.pack(side="right", fill="both", expand=True)

        notebook = ttk.Notebook(content)
        notebook.pack(fill="both", expand=True)

        # ---------- TABLA ----------
        tab1 = ttk.Frame(notebook)
        notebook.add(tab1, text="Datos")

        columnas = ("ID", "Nombre", "Edad", "Carrera")

        self.tree = ttk.Treeview(
            tab1,
            columns=columnas,
            show="headings"
        )

        for col in columnas:
            self.tree.heading(col, text=col)
            self.tree.column(col, width=120)

        datos = [
            (1, "Ana", 20, "Ingeniería"),
            (2, "Carlos", 22, "Medicina"),
            (3, "Luis", 21, "Derecho"),
            (4, "María", 23, "Arquitectura")
        ]

        for d in datos:
            self.tree.insert("", tk.END, values=d)

        scrollbar = ttk.Scrollbar(
            tab1,
            orient="vertical",
            command=self.tree.yview
        )

        self.tree.configure(yscrollcommand=scrollbar.set)

        self.tree.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")

        # ---------- TEXTO ----------
        tab2 = ttk.Frame(notebook)
        notebook.add(tab2, text="Consola")

        self.texto = tk.Text(
            tab2,
            font=("Consolas", 11)
        )

        scroll_text = ttk.Scrollbar(
            tab2,
            command=self.texto.yview
        )

        self.texto.configure(
            yscrollcommand=scroll_text.set
        )

        self.texto.pack(
            side="left",
            fill="both",
            expand=True
        )

        scroll_text.pack(
            side="right",
            fill="y"
        )

        self.texto.insert(
            tk.END,
            "Bienvenido al sistema.\n"
            "Aquí aparecerán los registros.\n"
        )

    def crear_barra_estado(self):

        self.estado = ttk.Label(
            self.root,
            text="Listo",
            relief="sunken",
            anchor="w"
        )

        self.estado.pack(
            side="bottom",
            fill="x"
        )

    def agregar(self):

        self.tree.insert(
            "",
            tk.END,
            values=(5, "Nuevo", 18, "Informática")
        )

        self.texto.insert(
            tk.END,
            "Se agregó un nuevo registro.\n"
        )

        self.estado.config(
            text="Registro agregado correctamente"
        )


root = tk.Tk()
app = Aplicacion(root)
root.mainloop()