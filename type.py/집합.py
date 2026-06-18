s1 = set([1, 2, 3])
li = list(s1)
print(li) # set(집합)은 순서가 없기 때문에 리스트로 변환하면 순서가 바뀔 수 있다. 
s2 = set([3, 4, 5])
print(s1 & s2) # 교집합
print(s1 | s2) # 합집합
print(s1 - s2) # 차집합
s1.add(4) # set에 요소 추가
s1.update([5, 6]) # set에 여러 요소 추가
s1.remove(3) # set에서 요소 제거