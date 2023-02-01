class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize(sequence_length=1)
    @sequence_length = sequence_length
    @seq = []
    @game_over = false
  end

  def play

  end

  def take_turn
    if game_over == false
      self.show_sequence
      self.require_sequence
    end
  end

  def show_sequence

  end

  def require_sequence

  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message

  end

  def game_over_message

  end

  def reset_game

  end
end
