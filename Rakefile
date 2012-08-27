require 'rake'
require 'stasis'

task :default => [:render]

desc 'Render the static site through `statis`'
task :render do
  puts 'rendering static file'
  stasis = Stasis.new('src', '../www')
  stasis.render('index.html.erb',
                'css',
                'js')
end
