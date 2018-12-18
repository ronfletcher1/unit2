"""Lattice paths.

Starting in the top left corner of a 2×2 grid, and only being able to move
to the right and down, there are exactly 6 routes to the bottom right
corner.

How many such routes are there through a 20×20 grid?

http://projecteuler.net/problem=15

"""

# This problem has factorial complexity, and it is best to avoid brute force
# approach. It helps to note that from each node we can make only two moves
# right and down (R and D for short) and that there can be exactly 20 R and
# 20 D moves for a 20×20 grid, total 40 moves. The solution boils down to
# finding all possible permutation of those moves. But for a fixed position
# of R moves D moves in between can be swapped, e.g. for 2×2 grid RDRD we
# wouldn't notice if second D was swapped with the 4th. The same can be said
# for R. Therefore, with 40 moves we have 40! permutations, but we should
# scale that number with 20! for all possible permutation of D positions
# within a permutation, and 20! for Rs. The final solution boils down to
# finding 40! / (20! * 20!).

import math
print(math.factorial(40) // (math.factorial(20) ** 2))  # 137846528820