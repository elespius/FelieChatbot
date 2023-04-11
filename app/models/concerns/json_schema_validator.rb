class JsonSchemaValidator < ActiveModel::Validator
  def validate(record)
    attribute_resolver = options[:attribute_resolver] || ->(rec) { rec.additional_attributes }
    json_data = attribute_resolver.call(record)
    schema = options[:schema]

    validate_schema(json_data, schema, 'root', record)
  end

  private

  def validate_schema(json_data, schema, path, record)
    schema.each do |key, rule|
      value = json_data[key]

      if rule[:required] && value.nil?
        record.errors.add(path, "#{key} is required")
      elsif !value.nil?
        validate_type(value, rule[:type], "#{path}.#{key}", record)

        validate_schema(value, rule[:properties], "#{path}.#{key}", record) if rule[:properties] && value.is_a?(Hash)
      end
    end
  end

  def validate_type(value, type, path, record)
    case type
    when 'string'
      validate_string(value, path, record)
    when 'integer'
      validate_integer(value, path, record)
    when 'hash'
      validate_hash(value, path, record)
    when 'array'
      validate_array(value, path, record)
    when 'boolean'
      validate_boolean(value, path, record)
    else
      raise ArgumentError, "Unsupported type: #{type}"
    end
  end

  def validate_string(value, path, record)
    record.errors.add(path, 'must be a string') unless value.is_a?(String)
  end

  def validate_integer(value, path, record)
    record.errors.add(path, 'must be an integer') unless value.is_a?(Integer)
  end

  def validate_hash(value, path, record)
    record.errors.add(path, 'must be a hash') unless value.is_a?(Hash)
  end

  def validate_array(value, path, record)
    record.errors.add(path, 'must be an array') unless value.is_a?(Array)
  end

  def validate_boolean(value, path, record)
    record.errors.add(path, 'must be a boolean') unless [true, false].include?(value)
  end
end
