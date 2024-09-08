mydic = {
    "Fast": "In a quick manner",
    "Anurag": "A coder",
    "Marks": [1,34,5,6],
    "anotherdic": {'Anurag': 'coder'},
    1:2
}
#Dictionary methods
print(mydic.keys())#print the keys of the dictionary
print(list(mydic.values()))#print the values of the dictionary
print(list(mydic.items()))#print the keys,values of the dictionary
print(mydic)
updatedic = {
    "Anurag": "Friend",
    "ankit": "student",
    "Fast": "quick coder"
}
mydic.update(updatedic)#update the dictionary by adding the key-value pairs from updatedic
print(mydic)

print(mydic.get("Anurag"))#print value associated with key "Anurag"
print(mydic("Anurag"))#print value associated with key "Anurag"

#Different between .get & [] syntax in dictionary
print(mydic.get("Anurag2"))#return none as anurag2 is not present in the dictionary
print(mydic["Anurag2"])#throw arror as anurag2 is not present in the dictionary