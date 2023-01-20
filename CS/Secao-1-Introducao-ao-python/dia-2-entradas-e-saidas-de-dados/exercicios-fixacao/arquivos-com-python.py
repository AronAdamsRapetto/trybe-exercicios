def main():
    students = read_file()
    reproved_students = [student
                         for student in students
                         if int(student[1]) < 6]
    write_file(reproved_students)


def read_file():
    student_list = []
    with open("./estudantes.txt") as file:
        for line in file:
            student_list.append(line.split())
    return student_list


def write_file(student_list):
    with open("estudantes-reprovados.txt", "w") as file:
        for student in student_list:
            file.write(f"{student[0]}\n")


main()
