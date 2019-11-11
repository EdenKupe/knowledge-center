var client = algoliasearch("51CECYVH5R", "c7a71a465b895e34b00ecb5b0f0141fb")
var knowledgeIndex = client.initIndex('knowledge_BASE');
var search = document.getElementById('aa-search-input');

const searchInstance = autocomplete(
  '#aa-search-input',
  {
    debug: true
  },
  [
    {
      source: autocomplete.sources.hits(knowledgeIndex, {hitsPerPage: 10}),
      displayKey: '',
      name: 'kb', /* class aa-dataset-kb */
      templates: {
        suggestion: function(suggestion) {
          let value = suggestion.pagename;
          let content = suggestion.content;
          let link = suggestion.permalink;
          let title = $('title');
          let titletext = title.text();
          if (suggestion._highlightResult.pagename) {
            value = suggestion._highlightResult.pagename.value;
          }
          if (suggestion._highlightResult.content) {
            content = suggestion._highlightResult.content.value;
          }
          if (suggestion._highlightResult.permalink) {
            suggestion._highlightResult.permalink.value;
          }
          if ((titletext == "Welcome! | LivePerson Knowledge Center") || (titletext == "New Experiences | LivePerson Knowledge Center") ) {
            return (
              '<span class="searchtitlecontainer">' + '<a class="searchtitle" href="' + link +'">' + value + '</a> </span>' + '<br />' + '<a class="searchlinktext" href="' + link +'">' + '<span class="searchcontentcontainer">' + content + '</span> </a> '
            )
          } else {
          return (
            '<a onclick="linkclick(event, this)" class="searchtitle" href="' + link +'"> <span class="searchtitlecontainer">' + value + '</span></a>' + '<br />' + '<a onclick="linkclick(event, this)" class="searchlinktext" href="' + link +'">' + '<span class="searchcontentcontainer">' + content + '</span> </a> '
          )
          }
        },
        empty: '<div class="aa-empty">No results found!</div>',
      },
    },
  ]
);

searchInstance.on({
  'autocomplete:shown': function() {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.add('overlayvisible');
    sidebar.classList.add('overlayvisible');
    footer.classList.add('overlayvisible');
},
  'autocomplete:closed': function () {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.remove('overlayvisible');
    sidebar.classList.remove('overlayvisible');
    footer.classList.remove('overlayvisible');
},
  'autocomplete:empty': function () {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.add('overlayvisible');
    sidebar.classList.add('overlayvisible');
    footer.classList.add('overlayvisible');
},
  'autocomplete:selected': function (event, suggestion, dataset, context) {
    var target = suggestion.permalink;
    navigateContent(target);
    window.history.pushState({
      url: target
    }, '', target);
},
  'autocomplete:updated': function () {
    if (this.value != '') {
    var input = document.getElementById('aa-search-input');
    var filter = input.value.toUpperCase();
    localStorage.setItem('filter', filter);
    }else {
      var content = document.getElementById('defaultcontent');
      var sidebar = document.getElementById('defaultsidebar');
      var footer = document.getElementById('defaultfooter');
      content.classList.remove('overlayvisible');
      sidebar.classList.remove('overlayvisible');
      footer.classList.remove('overlayvisible');
}}
});
