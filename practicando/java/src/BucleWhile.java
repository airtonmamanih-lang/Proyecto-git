public class BucleWhile {
    public static void main (String[] args) {

        int i = 1;
        int j = 4;

        while (i <= 10) {
            System.out.println(i*j);
            if (i*j >= 30) {
                System.out.println("El producto es mayor o igual a 30");
            } else {
                System.out.println("El producto es menor a 30");
            }

            i++;
        }
    }
}