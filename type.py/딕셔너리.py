amu = { 'name':'서재민' , "age":"18", "your mother":"안녕하세요" }  
amu[2] = 'b'
print(amu['name']) # 딕셔너리는 키값으로 접근한다.
print(amu['age'])
print(amu['your mother'])
print(amu[2]) # 딕셔너리는 키값으로 접근한다.
del amu[2]
print(amu)
#딕셔너리 만들떄 주의할 사항은 딕셔너리에는 동일한 키가 중복으로 존재 할수 없음
#딕셔너리는 순서가 없다. 그래서 인덱싱이 불가능하다.
a = {'name':'서재민', 'phone':'01075875144', 'birth':'090211'}
a.keys() # 딕셔너리의 키값만 출력
list(a.keys()) # 딕셔너리의 키값만 리스트로 출력
a.values() # 딕셔너리의 값만 출력
a.items() # 딕셔너리의 키와 값 모두 출력
a.clear() # 딕셔너리의 모든 요소 삭제
'name' in a # 딕셔너리 안에 'name'이라는 키가 있는지 확인
a.get('name') # 딕셔너리에서 'name'이라는 키의 값을 반환, 존재하지 않는 키 사용시 None 반환
a.get('nokey', 'foo') # 딕셔너리에서 'nokey'라는 키의 값을 반환, 존재하지 않는 키 사용시 'foo' 반환