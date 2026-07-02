import java.util.ArrayList;
import java.util.List;

// Clase principal que ejecuta el programa
public class MonografiaKeikoFujimori {

    public static void main(String[] args) {
        // Crear la estructura de la monografía
        Monografia monografia = new Monografia(
            "Monografía: Trayectoria Política de Keiko Fujimori",
            "Curso de Historia Política Peruana Contemporánea",
            "2026"
        );

        // Agregar las secciones correspondientes
        monografia.agregarSeccion(new Seccion("1. Introducción", 
            "Keiko Sofía Fujimori Higuchi es una de las figuras más polarizantes e influyentes del panorama\n" +
            "político peruano del siglo XXI. Como heredera del 'Fujimorismo', ha liderado el partido\n" +
            "Fuerza Popular y ha sido candidata presidencial en múltiples procesos electorales, marcando\n" +
            "la agenda política del país entre el respaldo absoluto y la férrea oposición."));

        monografia.agregarSeccion(new Seccion("2. Biografía y Primeros Años", 
            "Nacida en Lima en 1975, es hija del expresidente Alberto Fujimori y Susana Higuchi.\n" +
            "Asumió las funciones de Primera Dama de la Nación en 1994, a los 19 años, tras la separación\n" +
            "de sus padres. Estudió Administración de Empresas en la Universidad de Boston y posteriormente\n" +
            "obtuvo una maestría en la Universidad de Columbia."));

        monografia.agregarSeccion(new Seccion("3. Carrera Política y Congresista (2006-2011)", 
            "Inició formalmente su carrera política postulando al Congreso de la República en las elecciones\n" +
            "del 2006, convirtiéndose en la congresista más votada de la historia del Perú hasta ese momento.\n" +
            "Durante su gestión legislativa, se enfocó en consolidar la bancada fujimorista y en la\n" +
            "reorganización de las bases de su movimiento de cara a proyectos nacionales."));

        monografia.agregarSeccion(new Seccion("4. Campañas Presidenciales y Fuerza Popular", 
            "Fundó el partido Fuerza Popular (inicialmente Fuerza 2011) con el que postuló a la presidencia\n" +
            "en tres ocasiones consecutivas (2011, 2016 y 2021), llegando en todas ellas a la segunda vuelta\n" +
            "electoral. Sus derrotas en balotaje ante Ollanta Humala, Pedro Pablo Kuczynski y Pedro Castillo\n" +
            "evidenciaron la profunda división y el fenómeno del 'antifujimorismo' en el electorado."));

        monografia.agregarSeccion(new Seccion("5. Procesos Judiciales y Controversias", 
            "Su trayectoria ha estado marcada por investigaciones fiscales complejas, destacando el caso\n" +
            "Odebrecht por presunto lavado de activos y financiamiento irregular de campañas. Esto la llevó\n" +
            "a cumplir periodos de prisión preventiva, un factor que reconfiguró el peso de su liderazgo\n" +
            "y la percepción pública de su partido en los últimos años."));

        monografia.agregarSeccion(new Seccion("6. Conclusiones", 
            "La presencia de Keiko Fujimori en la política peruana refleja la persistencia de una corriente\n" +
            "política (el fujimorismo) que mantiene un voto duro significativo debido al recuerdo de las\n" +
            "políticas de los años 90, pero que a la vez genera una resistencia de igual o mayor magnitud.\n" +
            "Su legado sigue en debate, siendo una pieza clave para entender la crisis de gobernabilidad\n" +
            "y la fragmentación partidaria en el Perú contemporáneo."));

        // Mostrar el documento completo en la consola
        monografia.mostrarMonografia();
    }
}

// Clase que representa la estructura global de la Monografía
class Monografia {
    private String titulo;
    private String contexto;
    private String anio;
    private List<Seccion> secciones;

    public Monografia(String titulo, String contexto, String anio) {
        this.titulo = titulo;
        this.contexto = contexto;
        this.anio = anio;
        this.secciones = new ArrayList<>();
    }

    public void agregarSeccion(Seccion seccion) {
        this.secciones.add(seccion);
    }

    public void mostrarMonografia() {
        System.out.println("=====================================================================");
        System.out.println(this.titulo.toUpperCase());
        System.out.println("Contexto Académico: " + this.contexto);
        System.out.println("Año: " + this.anio);
        System.out.println("=====================================================================\n");

        for (Seccion sec : secciones) {
            System.out.println(sec.getTituloSeccion());
            System.out.println("---------------------------------------------------------------------");
            System.out.println(sec.getContenido());
            System.out.println();
        }
        System.out.println("==================== FIN DE LA MONOGRAFÍA ===========================");
    }
}

// Clase que representa cada capítulo o sección de la monografía
class Seccion {
    private String tituloSeccion;
    private String contenido;

    public Seccion(String tituloSeccion, String contenido) {
        this.tituloSeccion = tituloSeccion;
        this.contenido = contenido;
    }

    public String getTituloSeccion() {
        return tituloSeccion;
    }

    public String getContenido() {
        return contenido;
    }
}