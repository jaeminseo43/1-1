a = [1, 2, 3]
print(a)      # [1, 2, 3] (객체 호출)
print(id(a))  # 140732... (객체의 고유 메모리 주소)
b = [1,2,3]
c = b
print(id(c))
B = a[:]#전체 슬라이싱
print(B)
A = [2,3,4] # 리스트에서 값 대입하는 방법
A[1] = 4
print(A)
from copy import copy
ca = [1,2,3]
ca = copy(ca)