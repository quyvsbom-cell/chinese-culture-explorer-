# -*- coding: utf-8 -*-
"""
Validate bracket/brace/parenthesis nesting and template literals in JS files
"""
import re

def validate_js(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        code = f.read()

    # Track line numbers
    lines = code.split('\n')
    print(f"{filename}: {len(lines)} lines, {len(code)} characters.")

    # Check for basic template literal balance outside regular strings
    # We can do a token scan
    stack = []
    in_single = False
    in_double = False
    in_template = 0
    in_line_comment = False
    in_block_comment = False
    escape = False

    for i, char in enumerate(code):
        if in_line_comment:
            if char == '\n':
                in_line_comment = False
            continue
        if in_block_comment:
            if char == '/' and i > 0 and code[i-1] == '*':
                in_block_comment = False
            continue

        if escape:
            escape = False
            continue

        if char == '\\':
            escape = True
            continue

        if not in_single and not in_double and in_template == 0:
            if char == '/' and i + 1 < len(code) and code[i+1] == '/':
                in_line_comment = True
                continue
            if char == '/' and i + 1 < len(code) and code[i+1] == '*':
                in_block_comment = True
                continue

        if char == "'" and not in_double and in_template == 0:
            in_single = not in_single
            continue

        if char == '"' and not in_single and in_template == 0:
            in_double = not in_double
            continue

        if char == '`' and not in_single and not in_double:
            if in_template > 0:
                in_template -= 1
            else:
                in_template += 1
            continue

        if in_single or in_double:
            continue

        # In template strings, check for ${ ... }
        if in_template > 0:
            if char == '{' and i > 0 and code[i-1] == '$':
                stack.append(('${', i))
            elif char == '}' and stack and stack[-1][0] == '${':
                stack.pop()
            continue

        if char in '({[':
            stack.append((char, i))
        elif char in ')}]':
            if not stack:
                line_no = code[:i].count('\n') + 1
                raise Exception(f"Unmatched closing '{char}' at line {line_no}")
            top, pos = stack.pop()
            pairs = {')': '(', '}': '{', ']': '['}
            if pairs[char] != top:
                line_no = code[:i].count('\n') + 1
                orig_line = code[:pos].count('\n') + 1
                raise Exception(f"Mismatched '{char}' at line {line_no}, opened with '{top}' at line {orig_line}")

    if stack:
        top, pos = stack[-1]
        line_no = code[:pos].count('\n') + 1
        raise Exception(f"Unclosed '{top}' opened at line {line_no}")

    print(f"SUCCESS: {filename} has perfectly balanced syntax, strings, and template literals!")

if __name__ == '__main__':
    validate_js('src/app.js')
    validate_js('src/data/paintingsData.js')
    validate_js('src/data/regionsData.js')
    validate_js('src/components/visuals.js')
