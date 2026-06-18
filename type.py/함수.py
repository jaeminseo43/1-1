

def a():
    return 'hi'
s = a()
print(s)


def add(a,b):
    print()

def add(a,b): return a*b
r = add(5,3)
print(r)

def sub(a,b):
    return a-b
r = sub(5,1)
print(r)

def sub(s,x):
    r = sub(s=5,x=10)
print(r)

def addma(*a):
    r = 0
    for i in a:
        r += 1
    return r
r = addma(1,2,3,4,5,6)
print(r)