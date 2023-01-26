from statistics import mode


class Estatistica:
    result = 0

    @classmethod
    def media(cls, number_list):
        cls.result = 0
        for number in number_list:
            cls.result += number
        return cls.result / len(number_list)

    @classmethod
    def mediana(cls, number_list: list):
        cls.result = 0
        number_list.sort()
        if len(number_list) % 2 != 0:
            cls.result = number_list[(len(number_list) // 2)]
        else:
            cls.result = (
                number_list[int(len(number_list) / 2) - 1]
                + number_list[int(len(number_list) / 2)]
            ) / 2
        return cls.result

    @classmethod
    def moda(cls, number_list):
        cls.result = 0
        greatest_ocurrence = 0
        for number in number_list:
            ocurrence_count = 0
            for comparison_number in number_list:
                if comparison_number == number:
                    ocurrence_count += 1
            if ocurrence_count > greatest_ocurrence:
                greatest_ocurrence = ocurrence_count
                cls.result = number
        return cls.result


print(Estatistica.media([1, 2, 3, 4, 5]))
print(Estatistica.mediana([1, 2, 3, 4]))
print(Estatistica.moda([1, 1, 7, 2, 3, 7, 3, 4, 7, 5]))
