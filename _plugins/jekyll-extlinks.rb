# Jekyll ExtLinks Plugin
# Adds custom attributes to external links (rel="nofollow", target="_blank", etc.)
#
# Configuration example in _config.yml (notice the indentation matters):
#
# extlinks:
#   attributes: {rel: nofollow, target: _blank}
#   rel_exclude: ['host1.com', 'host2.net']
#
# (attributes are required - at least one of them, rel_exclude is optional)
# Relative links will not be processed.
# Links to hosts listed in rel_exclude will not have the 'rel' attribute set.
# Links which have the 'rel' attribute already will keep it unchanged, like
# this one in Markdown:
# [Link text](http://someurl.com){:rel="dofollow"}
#
# Using in layouts: {{ content | extlinks }}
#
# Developed by Dmitry Ogarkov - http://ogarkov.com/jekyll/plugins/extlinks/
# Based on http://dev.mensfeld.pl/2014/12/rackrails-middleware-that-will-ensure-relnofollow-for-all-your-links/

require 'jekyll'
require 'nokogiri'

module Jekyll
  module ExtLinks
    # Access plugin config in _config.yml
    def config
      @context.registers[:site].config['extlinks']
    end

    # Checks if str contains any fragment of the fragments array
    def contains_any(str, fragments)
      return false unless Regexp.union(fragments) =~ str
      true
    end

    def extlinks(content)
      # Process configured link attributes and whitelisted hosts
      if config
        if config['attributes']
          attributes = Array(config['attributes'])
        end
        if config['rel_exclude']
          rel_exclude = Array(config['rel_exclude'])
        end
      end
      # Stop if no attributes were specified
      return content unless attributes

      doc = Nokogiri::HTML.fragment(content)
      # Stop if we could't parse with HTML
      return content unless doc

      doc.css('img').each do |img|

        attributes.each do |attr, value|

          if attr.downcase == 'alt'
            next unless img.get_attribute('alt') !~ /.*/
          end
          img.set_attribute(attr, value)
        end
      end

      doc.css('a').each do |a|

        attributes.each do |attr, value|

          if attr.downcase == 'target'
          #check if link is external or a schema. If so, add the target attribute as defined in the config
          next unless a.get_attribute('href') =~ /\Ahttp/i || a.get_attribute('href') =~ /assets\/schema\/.*/

          end
          #check if link isn't internal or a schema. If so, add the onclick attribute as defined in the config
          if attr.downcase == 'onclick'
          next unless a.get_attribute('href') !~ /assets\/schema\/.*/
          next unless a.get_attribute('href') !~ /assets\/content\/.*/
          next unless a.get_attribute('href') !~ /\Ahttp/i
          next unless a.get_attribute('href') !~ /resources\/.*/
          end
          a.set_attribute(attr, value)
        end
      end

      doc.to_s
    end

  end
end

Liquid::Template.register_filter(Jekyll::ExtLinks)
