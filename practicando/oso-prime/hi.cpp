#include <iostream>
using namespace std;

int main() {
    int n1, n2;
    cin >> n1 >> n2;

    // Asegurar que el rango sea válido aunque n1 sea mayor que n2
    int inicio = min(n1, n2);
    int fin = max(n1, n2);

    for (int i = inicio; i <= fin; i++) {
        if (i % 2 == 0) {
            cout << i << endl;
        }
    }

    // Usar default o verificar paridad con != 0 para cubrir números negativos
    if (n1 % 2 == 0) {
        cout << "El primer número es par." << endl;
    } else {
        cout << "El primer número es impar." << endl;
    }

    return 0;
}