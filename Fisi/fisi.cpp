/* Fisi.cpp */
/* Creame una calculadora cientifica */
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    char op;
    double num1, num2;
    cout << "Enter operator (+, -, *, /, ^): ";
    cin >> op;
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    switch (op) {
        case '+':
            cout << "Result: " << num1 + num2 << endl;
            break;
        case '-':
            cout << "Result: " << num1 - num2 << endl;
            break;
        case '*':
            cout << "Result: " << num1 * num2 << endl;
            break;
        case '/':
            if (num2 != 0) {
                cout << "Result: " << num1 / num2 << endl;
            } else {
                cout << "Error: Division by zero" << endl;
            }
            break;
        case '^':
            cout << "Result: " << pow(num1, num2) << endl;
            break;
        default:
            cout << "Invalid operator" << endl;
    }
    return 0;
}
