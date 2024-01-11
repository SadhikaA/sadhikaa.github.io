---
title: 'Data Structures and Algorithms'
date: '2024-01-08'
---

## Trees 

- what is a BST (**binary search tree**)?
    - node on the left is less than current node
    - node on the right is greater than the current node 

- todo: graph representation of nodes of tree 

```python
# basic DFS in a BST
def dfs(node):
    if not node:
        return 
    if node.val < low:
        dfs(node.right)
    elif node.val > high:
        dfs(node.left)
dfs(root)
```

```python
# check if something is a leaf
def dfs(node, leaves):
    if not node.left and not node.right:
        # i'm a leaf
        leaves.append(node.val) 
    dfs(node.left, leaves)
    dfs(node.right, leaves)
dfs(root, leaves)
```

## Sorting Algorithms 

### Selection Sort

> sorting strategy: search list, finds the smallest one, swap and move to sorted portion

- iterative, goes through an unsorted subarray, transforming it into a sorted subarray, this list will have an unsorted portion and sorted portion 
- pseudocode steps:
    - set smallest number/minimum to first element in the list
    - look for the smallest number/minimum element in the list
    - swap the value with item at index[min]
    - increment index of [min] to next element 
    - repeat until the last element/list is sorted 


```python
# selection sort
def selectionSort(nums):
    length = len(nums)
    for i in range(len(nums)):
        smallest = i 
        # find smallest element in the array
        for j in range(i + 1, len(nums)):
            # if next number is smaller, reassign our smallest reference
            if nums[j] < nums[smallest]:
                smallest = j 
        # swap the elements 
        if smallest != i:
            curr = nums[i]
            nums[i] = nums[smallest]
            nums[smallest] = curr
    return nums
```

- to sort `n` elements, selection sort needs to first make `n - 1` passes, then `n - 2`, ... resulting in $n^2/2$ comparisons
- final runtime is $O(n^2)$

### Bubble Sort

- time complexity: $O(n^2)$
- iterative, comparison sort 

> compare every group of two elements and then swap them so they are in correct order

- it takes `n - 1` iterations to go through a collection of `n` elements 

```python
def bubbleSort(nums):
    isSorted = False
    while not isSorted:
        isSorted = True
        # iterate until we get to the last element
        for i in range(1, len(nums)):
            if nums[i - 1] > nums[index]:
                isSorted = False
                # swap elements
                nums[i - 1], nums[i] = nums[i], nums[i - 1]
    return nums
```

### Insertion Sort

- time complexity is still $O(n^2)$
- maintains two sublists, a sorted subset and an unsorted subset
- initially, everything is unsorted, we gradually remove each one of these and then insert them in the right position in the sorted array

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        currentUnsorted = arr[i]
        j = i - 1
        while j >= 0 and currentUnsorted < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = currentUnsorted
```

- outer loop contains all the iterations from left to right
- inner loop is the shifting of elements, iterating through sorted subset from right to left
- best case: a nearly sorted list is actually linear time 
- in-place algorithm 

### Counting Sort 

- can only be implemented on integers
- knows the range of integers beforehand, and builds up a count array, uses hash function to then sort the array
- works best if the range of integers < size of the list (smaller integers)
- find range, populate the counting array with count of each element 
- then sum up the count of every two elements by adding previous and incrementing as you go 
- shift the array by 1 index and replace first element with a 0 
- each value will now tell us where the index of the first instance of that integer in the array
- now go through our original array, find the value at that index in the count array and place it in our result array at that index
- then update the count array by 1 for the index value 
- repeat and we will get our sorted array
- time complexity is $O(n + k)$ where n is the number of items in the array, k is the range of items in the array

```python
def counting_sort(arr):
    max_value = max(arr)
    min_value = min(arr)
    range_of_elements = max_value - min_value + 1
    count = [0] * range_of_elements
    output = [0] * len(arr)
    for i in range(len(arr)):
        count[arr[i] - min_value] += 1
    for i in range(1, len(count)):
        count[i] += count[i - 1]
    i = len(arr) - 1
    while i >= 0:
        output[count[arr[i] - min_value] - 1] = arr[i]
        count[arr[i] - min_value] -= 1
        i -= 1
    for i in range(len(arr)):
        arr[i] = output[i]
```

### Merge Sort 

- uses divide and conquer to break the list into smaller and smaller sublists and then sort them 
- once we break the list into individual pieces, we combine based on seeing how they compare with each other

```py
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def merge(arr, L, M, R):
            left, right = arr[L:M+1], arr[M+1:R+1]
            i, j, k = L, 0, 0
            while j < len(left) and k < len(right):
                if left[j] <= right[k]:
                    arr[i] = left[j]
                    j += 1
                else:
                    arr[i] = right[k]
                    k += 1
                i += 1
            while j < len(left):
                nums[i] = left[j]
                j += 1
                i += 1
            while k < len(right):
                nums[i] = right[k]
                k += 1
                i += 1

        def mergeSort(arr, l, r):
            if l == r:
                return arr
            m = (l + r) // 2
            mergeSort(arr, l, m)
            mergeSort(arr, m + 1, r)
            merge(arr, l, m, r)
            return arr
        
        return mergeSort(nums, 0, len(nums) - 1)
```

### Quicksort 

- fastest algorithm
- choose a pivot, determine elements that are less than pivot, elements that are greater than the pivot
- quicksort on the less and greater parts and add the pivot inside 
- quicksort should aim to choose middle element as pivot to make it faster
- worst case runtime is $O(n^2)$ and best case is $O(nlogn)$

```py
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        less = [x for x in arr[1:] if x <= pivot]
        greater = [x for x in arr[1:] if x > pivot]
        return quicksort(less) + [pivot] + quicksort(greater)
```


 