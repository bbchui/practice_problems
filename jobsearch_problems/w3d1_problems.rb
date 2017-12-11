def longest_substring(str, k)
  substr = ''
  uniq = 0
  i = 0
  until uniq > k || i > str.length - 1
    unless substr.include?(str[i])
      uniq += 1
    end
    if uniq > k
      break
    else
      substr += str[i]
    end
    i += 1
  end

  if uniq < k
    return false
  end

  nextstr = longest_substring(str[1..-1], k)

  if nextstr != false && nextstr.length > substr.length
    substr = nextstr
  end

  substr
end

p longest_substring("aaaaaaabbbbbbbbbbbcc", 2)
