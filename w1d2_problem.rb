dict = [ 'car', 'badd', 'ab', 'bada', 'ada', 'race']

def is_palindrome(word)
  word == word.reverse
end

def palindrome_dictionary(dict)
  results = []
  dict.each_with_index do |word, i|
    dict.each_with_index do |wrd, idx|
      if i != idx
        results << [word, wrd] if is_palindrome(word + wrd)
      end
    end
  end
  results
end

p palindrome_dictionary(dict)
