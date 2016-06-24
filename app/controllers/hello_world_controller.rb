class HelloWorldController < ApplicationController
  def index
    @data = { name: "Stranger" }
  end
end
