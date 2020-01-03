module ControllerMacros
  def parsed_response
    deep_symbolize JSON.parse(response.body)
  end

  private

  def deep_symbolize(json)
    if json.is_a? Array
      json.map(&:deep_symbolize_keys)
    else
      json.deep_symbolize_keys
    end
  end
end
