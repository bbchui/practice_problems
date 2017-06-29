require_relative "static_array"
require 'byebug'

class DynamicArray
  attr_reader :length

  def initialize()
    @length = 0
    @capacity = 8
    @store = StaticArray.new(@capacity)
  end

  # O(1)
  def [](index)
    if index >= @length
      raise "index out of bounds"
    else
      @store[index]
    end
  end

  # O(1)
  def []=(index, value)
    if index >= @length
      raise "index out of bounds"
    else
      @store[index] = value
    end
  end

  # O(1)
  def pop
    if (@length <= 0)
      raise "index out of bounds"
    end
    @length -= 1
    @store[@length]
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    if @length == @capacity
      resize!
    end
    @length += 1
    @store[@length - 1] = val
  end

  # O(n): has to shift over all the elements.
  def shift
    if (@length <= 0)
      raise "index out of bounds"
    end
    @length -= 1
    new_store = Array.new(capacity)
    first = @store[0]
    (0..@length - 1).each do |i|
      new_store[i] = @store[i + 1]
    end
    @store = new_store
    first
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    if @length == @capacity
      resize!
    end
    new_store = Array.new(capacity)
    new_store[0] = val
    (0..@length - 1).each do |i|
      new_store[i + 1] = @store[i]
    end
    @length += 1
    @store = new_store
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    @capacity = @capacity * 2
    new_store = StaticArray.new(@capacity)
    (0..@length - 1).each do |i|
      new_store[i] = @store[i]
    end
    @store = new_store
  end
end
