# Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears on once. Do it in O(logn) and O(1)space

def single_in_sorted(arr)
  return arr[0] if arr.length == 1
  #[1,1,2,2,3,4,4,5,5,6,6]
  mid = arr.length/2
  left = arr.take(mid)
  right = arr.drop(mid)
  if left[-1] != right[0] && arr.length != 2
    single_in_sorted(arr.take(mid + 1))
  else
    single_in_sorted(arr.drop(mid))
  end
end

# p single_in_sorted([0,1,1,2,2,3,3])

def single_in_sorted2(arr)
  lo = 0
  hi = arr.length - 1
  while lo < hi
    mid = (hi + lo) / 2
    if arr[mid] != arr[mid - 1] && arr[mid] != arr[mid+1]
      return arr[mid]
    end
    if (arr[mid] == arr[mid-1] && mid.odd?) || (arr[mid] == arr[mid+1] && mid.even?)
      lo = mid + 1
    else
      hi = mid - 1
    end
  end
  arr[lo]
end

p single_in_sorted2([0,1,1,2,2,3,3])
