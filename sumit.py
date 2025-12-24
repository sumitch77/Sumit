import numpy as np

ro = int(input("Enter number of rows\n"))
co = int(input("Enter number of coloumns\n"))

print("Enter values for 1st matrix\n")
print()
a = []
for i in range(ro):
    row = []
    for j in range(co):
        b = int(input(f"Enter value at [{i}],[{j}] - "))

        row.append(b)
    a.append(row)

m1 = np.array(a)
print("1st matrix - \n", m1)

print()
print("Enter values for 2nd matrix\n")
d = []
for i in range(ro):
    roww = []
    for j in range(co):
        c = int(input(f"Enter value at [{i}],[{j}] - "))
        roww.append(c)
    d.append(roww)
m2 = np.array(d)
print("2nd matrix - \n ", m2)

if (ro == co):

    print("Addition - \n", np.add(m1, m2), "\n")
    print("Subtraction - \n", np.subtract(m1, m2), "\n")
    print("Multiplication - \n", np.multiply(m1, m2), "\n")

    print("Product of matrices - \n", m1 @ m2)

    print("Transpose of 1st matrix - \n", m1.T)
    dete = np.linalg.det(m1)
    print("Determinant of 1st matrix - \n", dete)
    if (dete == 0):
        print("Matrix is singular and has no inverse ")
    elif (dete != 0):
        print("Inverse of 1st matrix - \n", np.linalg.inv(m1))

    print("Transpose of 2nd matrix - \n", m2.T)
    dete2 = np.linalg.det(m2)
    print("Determinant of 2nd matrix - \n", dete2)
    if (dete2 == 0):
        print("Matrix is singular and has no inverse ")
    elif (dete2 != 0):
        print("Determinant of 2nd matrix - \n", np.linalg.inv(m2))

else:
    print("Addition - \n", np.add(m1, m2), "\n")

    print("Subtraction- \n", np.subtract(m1,
                                         m2), "\n")

    print("Multiplication- \n", np.multiply
    (m1, m2), "\n")

    print("Transpose of 2nd matrix - \n", m1.T)

    print("Transpose of 2nd matrix - \n", m2.T)