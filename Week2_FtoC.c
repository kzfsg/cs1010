#include <stdio.h>

int main(void)  {
    double celcius, fahrenheit;
    printf("Input temperature in fahrenheit: ");
    scanf("%d", &fahrenheit);
    celcius = (fahrenheit - 32) x 5/9;
    printf("The converted temperature in celcius is: %d", celcius);
    return 0;
}