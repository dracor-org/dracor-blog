source "https://rubygems.org"

# Use the GitHub Pages gem so local builds match what GitHub Pages serves.
# See https://pages.github.com/versions/ for the pinned Jekyll + plugin versions.
gem "github-pages", "232", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
