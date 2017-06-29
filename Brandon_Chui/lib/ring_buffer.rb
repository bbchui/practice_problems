require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @start_idx = 0
    @length = 0
    @capacity = 8
    @store = StaticArray.new(@capacity)
  end

  # O(1)
  def [](index)
    if index >= @length
      raise "index out of bounds"
    else
      @store[(@start_idx + index) % @capacity]
    end
  end

  # O(1)
  def []=(index, val)
    if index >= @length
      raise "index out of bounds"
    else
      @store[(@start_idx + index) % @capacity] = val
    end
  end

  # O(1)
  def pop
    if (@length <= 0)
      raise "index out of bounds"
    end
    @length -= 1
    @store[(@start_idx + @length) % @capacity]
  end

  # O(1) ammortized
  def push(val)
    if @length == @capacity
      resize!
    end
    @length += 1
    @store[(@start_idx + @length - 1) % @capacity] = val
  end

  # O(1)
  def shift
    if (@length <= 0)
      raise "index out of bounds"
    end
    @length -= 1
    @start_idx += 1
    @store[(@start_idx - 1) % @capacity]
  end

  # O(1) ammortized
  def unshift(val)
    if @length == @capacity
      resize!
    end
    @start_idx -= 1
    @length += 1
    @store[(@start_idx % @capacity)] = val
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
  end

  # def resize!
  #   @capacity = @capacity * 2
  #   new_store = StaticArray.new(@capacity)
  #   (@start_idx..@length - 1).each do |i|
  #     new_store[i] = store[i]
  #   end
  #   @store = new_store
  # end

  def resize!
    new_capacity = @capacity * 2
    new_store = StaticArray.new(new_capacity)
    length.times { |i| new_store[i] = self[i] }
    @capacity = new_capacity
    @store = new_store
    @start_idx = 0
  end
end
