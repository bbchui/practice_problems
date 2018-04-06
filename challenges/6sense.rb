

grid = ['ELEKTRAHTHORGV',
'SILVERAORWTNSH',
'AUAUAWREHSINUP',
'HNERKCTNWHAMRR',
'AFTEHSIITMASFA',
'ICYMILDRRNCAEA',
'IEIMAOIEEAERRL',
'WWYTWNDVRMGEIO',
'INVIDIBLEGAGRO',
'TDHSPAEOHDCNOP',
'CIOSKTTzTGEAND',
'HFKOKPRNNLKRMA',
'EBWOMANPAEUTAE',
'UOFALCONPFLSND']

grid2 = ['ABCD', 'PRAT', 'KITA', 'ANDY']
search_words = ['ANTMAN',
'DAREDEVIL ',
'DEADPOOL',
'ELEKTRA',
'HAWKEYE',
'PUNISHER',
'THING',
'WITCH']


def word_seek(grid, words)
    output = []
    grid.each_with_index do |row, r|
        row.split("").each_with_index do |letter, c|
            result = search(grid, letter, r, c, words)
            if result
                output.concat(result)
            end
        end
    end
    res = []
    output.each do |line|
      res.push(line[0])
    end

    words.each do |word|
      word = word.strip
      output.push([word, -1, -1]) unless res.include?(word)
    end

    output = output.sort_by {|word| word[0]}
    output.each do |line|
      puts line
    end
end


def search(grid, letter, r, c, words)
    # [top, top-right, mid-right, bot-right, bot, bot-left, mid-left, top-left] in terms of rows/columns
    x = [0, 1, 1, 1, 0, -1, -1, -1]
    y = [-1, -1, 0, 1, 1, 1, 0, -1]
    ans = []
    words.each do |word|
        word = word.strip
        next if word[0] != letter
        len = word.length
        i = 0
        while i < 8 # the number of directions
            row = r + x[i]
            col = c + y[i]

            j = 1
            while j < len
                break if (row > grid.length - 1 || col > grid.length - 1 || row < 0 || col < 0)
                break if grid[row][col] != word[j]

                row += x[i]
                col += y[i]
                j += 1
            end
            ans.push([word, r, c]) if j == len
            # ans.push([word, -1, -1]) if j != len
            i += 1
        end
    end
    ans.length != 0 ? ans : false
end

word_seek(grid, search_words)
