def find_largest_name(name_list):
    largest_name = ""
    for name in name_list:
        if len(name) > len(largest_name):
            largest_name = name
    return largest_name
