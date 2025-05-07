n = int(input())
ratio = -1
values = []
for i in range(n):
    x = input().split()
    values.append([float(x[0]),float(x[1])])

for i in range(n-1):
    for j in range(i+1,n):
        test = abs(values[i][1]-values[j][1])/abs(values[i][0]-values[j][0])
        if test>ratio:
            ratio = test
print(ratio)