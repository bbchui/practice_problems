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

def format_duration(seconds)
  return "now" if seconds == 0
  year = seconds / 31536000
  day = (seconds % 31536000) / 86400
  hour = ((seconds % 31536000) % 86400) / 3600
  minute = (((seconds % 31536000) % 86400) % 3600) / 60
  sec = ((((seconds % 31536000) % 86400) % 3600) % 60) % 60

  y = plural("year", year)
  d = plural("day", day)
  h = plural("hour", hour)
  m = plural("minute", minute)
  s = plural("second", sec)

  res = []
  res.push("#{year} #{y}") if y
  res.push("#{day} #{d}") if d
  res.push("#{hour} #{h}") if h
  res.push("#{minute} #{m}") if m
  res.push("#{sec} #{s}") if s

  if res.length > 2
    i = 0
    until i >= res.length - 2
      res[i] = res[i] + ","
      i += 1
    end
    res.insert(res.length - 1, "and").join(" ")
  elsif res.length > 1
    res.insert(res.length - 1, "and").join(" ")
  else
    res.join(" ")
  end
end

def plural(time, num)
  if num == 0
    return nil
  elsif num == 1
    return "#{time}"
  else
    return "#{time}s"
  end
end


def generateHashtag(str)
  return false if str.empty? || str.length > 139
  str = str.split(" ").map {|word| word.capitalize}.join("")
  "##{str}"
end

def to_camel_case(str)
  return "" if str.empty?
  str = str.split("-").map.with_index do |word, i|
    if i == 0
      word = word
    else
      word = word.capitalize
    end
  end.join("").split("_").map.with_index do |word, i|
    if i == 0
      word = word
    else
      word = word.capitalize
    end
  end.join("")
end
