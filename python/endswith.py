def solution(string, ending):
    return string[len(string)-len(ending):]==ending

print(solution('abc', 'bc'))
print(solution('abc', 'd'))
