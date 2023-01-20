def verify_triangle(a, b, c):
    if a + b < c:
        return "não é triangulo"
    elif b + c < a:
        return "não é triangulo"
    elif a + c < b:
        return "não é triangulo"

    if a == b == c:
        return "Triângulo Equilátero: três lados iguais"
    elif a == b or a == c or b == c:
        return "Triângulo Isósceles: quaisquer dois lados iguais"
    elif a != b != c:
        return "Triângulo Escaleno: três lados diferentes"
