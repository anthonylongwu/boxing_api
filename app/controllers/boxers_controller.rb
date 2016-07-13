class BoxersController < ApplicationController

  def index
    @boxers = Boxer.all
  end

  def show
    @boxer = Boxer.find(1)
  end

  def create
    @boxer = Boxer.create(first_name: params[:first_name], last_name: params[:last_name], weight_class: params[:weight_class],current_record: params[:current_record], titles_held: params[:titles_held], home_town: params[:home_town])
  end

  
   def destroy
    Employee.find(params[:id]).destroy
    respond_to do |format|
      format.html { redirect_to "/boxers"}
      format.json {render json: "Boxer Deleted" }
  end

  def edit
  end

  def update
    @boxer = Boxer.find(params[:id])
    @boxer.update(first_name: params[:first_name], last_name: params[:last_name], weight_class: params[:weight_class],current_record: params[:current_record], titles_held: params[:titles_held], home_town: params[:home_town])
  end

  def search
    @boxers = Boxer.where("name like ?", "%#{params[:name]}")
end
end
