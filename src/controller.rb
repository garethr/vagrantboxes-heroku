require 'yaml'

before 'index.html.erb' do
  @boxes = YAML.load_file('data/boxes.yml').
    sort{|x, y| x[:name] <=> y[:name]}.
    sort{|x, y| x[:type] <=> y[:type]}
end
