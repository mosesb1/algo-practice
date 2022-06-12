bracket_pairs = {
    '[': ']',
    '(': ')',
    '{': '}'
}

stack = ['[','[','[']

string = 'hello'

for i in range(len(stack)):
    tmp_bracket = stack.pop()
    string += bracket_pairs[tmp_bracket]
    print(tmp_bracket)

print(string)
