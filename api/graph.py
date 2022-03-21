def mergeSortInversions(nums, left, right):
    if left >= right:
        return 0
    
    inversions_count = 0
    
    mid = (right + left) // 2
    
    inversions_count += mergeSortInversions(nums, left, mid)
    inversions_count += mergeSortInversions(nums, mid+1, right)
    
    inversions_count += merge(nums, left, mid, right)
    
    return inversions_count
    
# Merge two subarrays that are already sorted
# 1 - Place all the smallest elements until one subarray is empty
# 2 - Place the remaining elements on the tmp array
def merge(nums, left, mid, right):
    index_helper = 0
    index1 = left
    index2 = mid + 1
    tmp = [0] * (right - left + 1)
    inversions_count = 0
    
    while index1 <= mid and index2 <= right:
        if nums[index1] <= nums[index2]:
            tmp[index_helper] = nums[index1]
            index1 += 1
        else:
            # inversion
            inversions_count += (mid-index1 + 1)
            tmp[index_helper] = nums[index2]
            index2 += 1
        
        index_helper += 1
    
    # Place the remainings
    while index1 <= mid:
        tmp[index_helper] = nums[index1]
        index1 += 1
        index_helper += 1

    while index2 <= right:
        tmp[index_helper] = nums[index2]
        index2 += 1
        index_helper += 1
    
    # Move elements from tmp to answer
    j = 0
    for i in range(left, right+1):
        nums[i] = tmp[j]
        j += 1
        
    return inversions_count

available_rankings = []
available_rankings.append({1:1, 2:2, 3:3, 4:4, 5:5, 6:6}) 
available_rankings.append({1:1, 2:5, 3:4, 4:6, 5:3, 6:2}) 
available_rankings.append({1:5, 2:3, 3:1, 4:2, 5:6, 6:4})
available_rankings.append({1:1, 2:3, 3:2, 4:5, 5:4, 6:6}) 

get_score_from_ranking = {1:6, 2:5, 3:4, 4:3, 5:2, 6:1}

user_choices = {0: True, 1: True} # escolheu Pokemon e Mario Bros
size_types = 6
total = {}
score_with_type_game = collections.defaultdict(int)

# go for each choice from user
# and correlate a score for each type_game
for user_choice in user_choices:
    current_ranking = available_rankings[user_choice]
    for i in range(1, size_types+1):
        
        type_game = current_ranking[i]
        score = get_score_from_ranking[i]
        print("i", i, score, type_game)
        
        score_with_type_game[type_game] += score
        

print(score_with_type_game)
# Immersion 12, Achievement 6, 
# expected output = {1:12, 2: 6, ...}

max_heap = []
for type_game in range(1, size_types+1):
    score = score_with_type_game[type_game]
    
    heapq.heappush(max_heap, [-score, type_game])
        
user_preferences_ranking = {}
for i in range(1, len(max_heap)+1):
    _, type_game = heapq.heappop(max_heap)
    
    user_preferences_ranking[i] = type_game
    
print("user_preferences_ranking: ", user_preferences_ranking)
# ('user_preferences_ranking: ', {1:1, 2:4, 3:5, 4:2, 5:3, 6:6])

answer = 1
min_inversions_count = -float("infinity")
# check the inversion with each game which were not choosen yet
for choice in range(len(available_rankings)):
    if choice in user_choices: continue # ignore games already choosen
        
    current_ranking = available_rankings[choice]
    
    
    stack = []
    for i in range(1, size_types+1):
        index_current_ranking_type = current_ranking[i]
        print('index: ', index_current_ranking_type, user_preferences_ranking[index_current_ranking_type])
        stack.append(user_preferences_ranking[index_current_ranking_type])

    print('current_ranking: ', current_ranking)
    print('stack: ', stack)
    # ('current_ranking: ', {1: 5, 2: 3, 3: 1, 4: 2, 5: 6, 6: 4})
    # ('stack: ', [3, 5, 1, 4, 6, 2])
    
    inversions_count = mergeSortInversions(stack, 0, len(stack)-1)
    
    if inversions_count > min_inversions_count:
        min_inversions_count = inversions_count
        answer = choice
        
    print('inversions_count: ', inversions_count)
    print("expected to receive 6 and 7")
print('answer: ', answer)
