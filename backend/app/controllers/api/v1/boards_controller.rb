class Api::V1::BoardsController < Api::V1::ApiController
  before_action :set_board, only: [:show, :update, :destroy]

  # GET /boards
  # GET /boards.json
  def index
    @boards = current_user.boards.order(position: :asc)
  end

  # GET /boards/1
  # GET /boards/1.json
  def show
  end

  # POST /boards
  # POST /boards.json
  def create
    @board = current_user.boards.build(board_params)

    if @board.save
      render :show, status: :created, location: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/1
  # PATCH/PUT /boards/1.json
  def update
    if @board.update(board_params)
      render :show, status: :ok, location: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/1
  # DELETE /boards/1.json
  def destroy
    @board.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      @board = current_user.boards.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def board_params
      params.require(:board).permit(:board_name, :board_description, :group_id, :position)
    end
end
