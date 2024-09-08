letter='''Dear <|NAME|>,
you are selected!
date: <|DATE|>'''
name=input("Enter your Name\n")
date=input("Enter Date\n")
letter=letter.replace("<|NAME|>", name)
letter=letter.replace("<|DATE|>", date)
print(letter)