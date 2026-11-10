letter = ''' Dear <|Name|>,
You are selected!
<|Date|>'''

print(letter.replace("<|Name|>", "harry").replace("<|Date|>", "29 april 2025"))