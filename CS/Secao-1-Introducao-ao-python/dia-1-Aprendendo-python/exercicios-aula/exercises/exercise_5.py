import math


def calculate_paint_expense(area):
    necessary_liters = area / 3
    necessary_cans = math.ceil(necessary_liters / 18)
    return (necessary_cans, necessary_cans * 80)
