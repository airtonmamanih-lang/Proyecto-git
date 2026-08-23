public class CondicionalElse {
    public static void main (String[] args) {

        double nota_final = 16.7;

        if ( nota_final >= 17) {
            System.out.println("Aprobaste con excelente nota");
        } else if (nota_final >= 13) {
            System.out.println("Aprobaste con buena nota");
        } else if (nota_final >= 10) {
            System.out.println("Aprobaste con nota regular");
        } else {
            System.out.println("Reprobaste");
        }
    }
}