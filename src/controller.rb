require 'yaml'

before 'index.html.erb' do
  @boxes = YAML.load_file('data/boxes.yml')
end
