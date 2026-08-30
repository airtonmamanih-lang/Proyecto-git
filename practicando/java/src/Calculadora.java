import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double n1;
        double n2
        double resultado;

        System.out.print("Ingrese el primer numero: ");
        n1 = sc.nextDouble();

        System.out.print("Ingrese el 12segundo numero: ");
        n2 = sc.nextDouble();

        System.out.println("Ingrese la operación:");
        System.out.println("1: Suma");
        System.out.println("2: Resta");
        System.out.println("3: Multiplicación");
        System.out.println("4: División");

        int operacion = sc.nextInt();

        switch (operacion) {

            case 1:
                resultado = n1 + n2;
                System.out.println("Suma: " + resultado);
                break;

            case 2:
                resultado = n1 - n2;
                System.out.println("Resta: " + resultado);
                break;

            case 3:
                resultado = n1 * n2;
                System.out.println("Multiplicación: " + resultado);
                break;

            case 4:
                resultado = n1 / n2;
                System.out.println("División: " + resultado);
                break;

            default:
                System.out.println("Operación no válida");
        }

        sc.close();
    }
}