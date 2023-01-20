def calculate_gas_expense(liters, gas_type):
    gas_info = {"G": 2.50,  "A": 1.90}

    total = liters * gas_info[gas_type]

    if gas_type == 'G':
        discount = 0.06 if liters > 20 else 0.04
    elif gas_type == 'A':
        discount = 0.05 if liters > 20 else 0.03

    return total - (total * discount)
