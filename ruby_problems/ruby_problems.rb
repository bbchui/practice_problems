def isPP(n)
  res = nil
  m = 2
  k = 2
  if Math.sqrt(n) % 1 == 0
    return [Math.sqrt(n).to_i, 2]
  end
  until m >= Math.sqrt(n)
    until m**k >= n
      k += 1
    end
    if m**k == n
      return [m, k]
    end
    m += 1
    k = 2
  end
  res
end
