#creating the empty sets
b = set()
print(type(b))

#adding values to an empyty sets
b.add(5)
b.add(8)
b.add(8)#adding the values repeatedly does not change a set
b.add((4,5))
#b.add({3,7,8})cannot be added list & dictionary
print(b)

#length of the set
print(len(b))#print the length of this sets

#remove item of an set
b.remove(8)#remove 8 from sets
print(b)

print(b.pop())
print(b)

#print(b.clear())
#print(b)

print(b.union({8,12}))
print(b)
print(b.intersection({12,8}))
print(b)