score = 0
if score >= 60:
    message = "success"
else:
    message = "failure"


t = 0
while t < 10:
	t += 1
	print(f"나무 {t}번 찍었네 친구")
	if t == 10:
		print('나무 넘어갔어요!')