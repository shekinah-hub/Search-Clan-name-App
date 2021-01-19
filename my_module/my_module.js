/**
 * Implements hook_menu().
 */
function my_module_menu() {
  var items = {};
  items['search'] = {
    title: 'Search Clan Name',
    page_callback: 'my_module_search_page',
    options:{
      reloadPage:true
      }
  };
   items['articles'] = {
    title: 'Search Clan Name',
    page_callback: 'my_module_articles_page',
    options:{
      reloadPage:true
      }
  };
   items['proverbs'] = {
    title: 'Search Proverbs',
    page_callback: 'my_module_proverbs_page',
    options:{
      reloadPage:true
      }
  };
   items['ebisoko'] = {
    title: 'Search Ebisoko',
    page_callback: 'my_module_ebisoko_page',
    options:{
      reloadPage:true
      }
  };
    items['counties'] = {
    title: 'Search Counties',
    page_callback: 'my_module_counties_page',
    options:{
      reloadPage:true
      }
  };
    items['autocomplete'] = {
    title: 'Autocomplete',
    page_callback: 'my_module_autocomplete_page'
  };
  return items;
}
/**Page callback function for my_module_search_page**/

function my_module_search_page() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: '<p class="gwf"> <h3><center><strong>Search Clan Totem, Name, Ekisoko or Olugero!</strong></br></br></center></h3><center><img src="http://localhost/drupal7/refscripts/web/mobile-application/app/themes/simpletheme/images/clan_app.png"></center></p>'
    };
    content['intro_text'] = {
      markup: '<p class="gwf"> The Next Gen Cultural Disruption App<div data-role="header"><h1>Orientation</h1></div><div data-role="content"><div class="box">Box 1</div><div class="box">Box 2</div></div></div><ul data-role="listview" data-inset="true" data-filter-placeholder="Filter Clan..." data-filter="true"> <li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1456">Envuma</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1476">Enkusu</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1436">Envubu</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1416">Ente</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1396">Entalaganya</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1376">Enswaswa</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1356">Ensuma</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1336">Ensenene</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1316">Nnamugoona</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1296">Enkima</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1276">Enkerebwe</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1256">Enkejje</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#node_1236">Enjovu</a></li><li><a href="http://avodahsystems.com">Luganda Idioms</a></li><li><a href="http://localhost/drupal7/refscripts/web/mobile-application/index.html#articles">Clans& Clan Names</a></li><li><a href="#">Chiefdoms/Amasaza</a></li><li><a href="#">Buganda Cultural Sites</a></li> </ul><center> <a class="gwf" href="#" data-role="button" data-inline="true">Buy me Coffee</a></center></p>'
    };
    return content;
  }
  catch (error) { console.log('my_module_search_page - ' + error); }
}

/** Trying out the filter items module**/
/**
 * Implements hook_page_build().
 */
function my_module_page_build(output) {
  switch (drupalgap_router_path_get()) {
  
  // Alter the privatemsg module's user messages page.
    case 'user-messages/%':

      // Add a custom autocomplete widget.
      output.search = {
        theme: 'autocomplete',
        remote: true,
        path: 'drupalgap/search-messages',
        value: 'thread_id',
        label: 'subject',
        filter: 'name'
      };
      break;
      
    
    default:
    
      // All other pages...
    
      // Add a brand name..
      output.brand = { markup: '<p><h2><center>Preferred Search Item!</center></h2></p>' };
      
      break;
  }
  console.log('my_chat_page_build', output);
}
/**
 * Page callback for autocomplete input.
 */
function my_module_autocomplete_page() {
  try {
    var content = {};
    content.my_autocomplete = {
      theme: 'autocomplete',
      remote: true,
      path: 'my-clan-autocomplete',
      value: 'nid',
      label: 'title',
      filter: 'title'
      
    };
    return content;
  }
  catch (error) { console.log('my_module_autocomplete_page - ' + error); }
}
/**
 * The page callback to display the view.
 */
function my_module_articles_page() {
  try {
    var content = {};
     content['my_articles_list'] = {
      theme: 'view',
/*...................Added this new attribute-starts-here.............................*/
      title: 'Clan Totems',
      title_attributes: {
    'data-role': 'header',
    'data-theme': 'a'
  },
/*...................Added this new attribute-ends-here.............................*/
      format: 'ol',
/*...................Added this new attribute-starts-here.............................*/
      format_attributes: {
         'data-inset': 'true'
  },
/*...................Added this new attribute-ends-here.............................*/
      path: 'clan', /* the path to the view in Drupal */
      row_callback: 'my_module_articles_list_row',
      empty_callback: 'my_module_articles_list_empty',
      attributes: {
        id: 'my_articles_list_view',
        'data-filter': 'true',
        'data-role':'listview',
        'data-inset':'true',
      }
    };
    return content;
  }
  catch (error) { console.log('my_module_articles_page - ' + error); }
}
/**
 * The row callback to render a single row.
 */
function my_module_articles_list_row(view, row, variables) {
  try {
     var image = theme('image', { path: row.photo.src });
    var title = '<h2>' + row.title + '</h2>';
    var html = l(image + title, 'node/' + row.nid);
    return html;
  }
  catch (error) { console.log('my_module_articles_list_row - ' + error); }
}
/**
 *
 */

function my_module_articles_list_empty(view, variables) {

  // This...

  return t('Sorry, no articles were found.');

  // Or...

  var content = {};
  content['msg'] = { markup: t('Sorry, no articles were found.') }
  // content['some-other-widget'] = { /* ... */ }
  return content;
}

//** another page to render the proverbs json page **//
/**
 * The page callback to display the view.
 */
function my_module_proverbs_page() {
  try {
    var content = {};
     content['my_proverbs_list'] = {
      theme: 'view',
/*...................Added this new attribute-starts-here.............................*/
      title: 'Luganda Proverbs/Engero',
      title_attributes: {
    'data-role': 'header',
    'data-theme': 'b'
  },
/*...................Added this new attribute-ends-here.............................*/
      format: 'ol',
/*...................Added this new attribute-starts-here.............................*/
      format_attributes: {
         'data-inset': 'true'
  },
/*...................Added this new attribute-ends-here.............................*/
      path: 'proverbs', /* the path to the view in Drupal */
      row_callback: 'my_module_proverbs_list_row',
      empty_callback: 'my_module_proverbs_list_empty',
      attributes: {
        id: 'my_proverbs_list_view',
        'data-role':'listview',
        'data-inset':'true',
      }
    };
    return content;
  }
  catch (error) { console.log('my_module_proverbs_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function my_module_proverbs_list_row(view, row, variables) {
  try {
    var title = '<h2>' + row.title + '</h2>';
    var html = l(title, 'node/' + row.nid);
    return html;
  }
  catch (error) { console.log('my_module_proverbs_list_row - ' + error); }
}

//** another page to render the ebisoko json page **//
/**
 * The page callback to display the view.
 */
function my_module_ebisoko_page() {
  try {
    var content = {};
     content['my_ebisoko_list'] = {
      theme: 'view',
/*...................Added this new attribute-starts-here.............................*/
      title: 'Luganda Ebisoko',
      title_attributes: {
    'data-role': 'header',
    'data-theme': 'b'
  },
/*...................Added this new attribute-ends-here.............................*/
      format: 'ol',
/*...................Added this new attribute-starts-here.............................*/
      format_attributes: {
         'data-inset': 'true'
  },
/*...................Added this new attribute-ends-here.............................*/
      path: 'luganda-bisoko', /* the path to the view in Drupal */
      row_callback: 'my_module_ebisoko_list_row',
      empty_callback: 'my_module_ebisoko_list_empty',
      attributes: {
        id: 'my_ebisoko_list_view',
        'data-role':'listview',
        'data-inset':'true',
      }
    };
    return content;
  }
  catch (error) { console.log('my_module_ebisoko_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function my_module_ebisoko_list_row(view, row, variables) {
  try {
    var title = '<h2>' + row.title + '</h2>';
    var html = l(title, 'node/' + row.nid);
    return html;
  }
  catch (error) { console.log('my_module_ebisoko_list_row - ' + error); }
}
//** another page to render the counties json page **//
/**
 * The page callback to display the view.
 */
function my_module_counties_page() {
  try {
    var content = {};
     content['my_counties_list'] = {
      theme: 'view',
/*...................Added this new attribute-starts-here.............................*/
      title: 'Buganda counties',
      title_attributes: {
    'data-role': 'header',
    'data-theme': 'b'
  },
/*...................Added this new attribute-ends-here.............................*/
      format: 'ol',
/*...................Added this new attribute-starts-here.............................*/
      format_attributes: {
         'data-inset': 'true'
  },
/*...................Added this new attribute-ends-here.............................*/
      path: 'counties', /* the path to the view in Drupal */
      row_callback: 'my_module_counties_list_row',
      empty_callback: 'my_module_counties_list_empty',
      attributes: {
        id: 'my_counties_list_view',
        'data-role':'listview',
        'data-inset':'true',
      }
    };
    return content;
  }
  catch (error) { console.log('my_module_counties_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function my_module_counties_list_row(view, row, variables) {
  try {
    var title = '<h2>' + row.title + '</h2>';
    var html = l(title, 'node/' + row.nid);
    return html;
  }
  catch (error) { console.log('my_module_counties_list_row - ' + error); }
}
//** Ive added the panel block **//
/**
 * Implements hook_block_info().
 */
function my_module_block_info() {
  try {
    var blocks = {};
    blocks['my_panel_block'] = {
      delta: 'my_panel_block',
      module: 'my_module'
    };
    blocks['my_panel_block_button'] = {
      delta: 'my_panel_block_button',
      module: 'my_module'
    };  
    blocks['my_powered_by_block'] = {
      delta: 'my_powered_by_block',
      module: 'my_module'
    };
     blocks['my_custom_block'] = {
      delta: 'my_custom_block',
      module: 'my_module'
    };
    return blocks;
  }
  catch (error) { console.log('my_module_block_info - ' + error); }
}
/**Add custom module css**/
/**
 * Implements hook_install().
 */
function my_module_install() {
  try {
    var css = drupalgap_get_path('module', 'my_module') + '/my_module.css';
    drupalgap_add_css(css);
  }
  catch (error) { console.log('my_module_install - ' + error); }
}
/**Add custom module css**/
/**
 * Implements hook_install().
 */
function my_module_block_install() {
  try {
    var css = drupalgap_get_path('module', 'my_module') + '/my_module.css';
    drupalgap_add_css(css);
  }
  catch (error) { console.log('my_module_install - ' + error); }
}
/**
 * Implements hook_block_view().
 */
function my_module_block_view(delta, region) {
  try {
    var content = '';
    switch (delta) {

      // The slide menu (aka panel).
      case 'my_panel_block':

        var attrs = {
          id: drupalgap_panel_id(delta),
          'data-role': 'panel',
          'data-position': 'left', // left or right
          'data-display': 'reveal' // overlay, reveal or push
        };
        var items = [
          bl('Clan Totems/Ebikka', 'articles', {
              attributes: {
                'data-icon': 'home'
              }
          }),
           bl('Luganda Idioms/Ebisoko', 'ebisoko', {
              attributes: {
                'data-icon': 'cloud'
              }
          }),
          bl('Luganda Proverbs/Engero', 'proverbs', {
              attributes: {
                'data-icon': 'cloud'
              }
          }),
            bl('Buganda Counties/Amasaza', 'counties', {
              attributes: {
                'data-icon': 'cloud'
              }
          }),
          bl('Eddaggala/Local Herbs(Ethnos)', 'herbs', {
              attributes: {
                'data-icon': 'cloud'
              }
          }),
           bl('About Us', 'node/587', {
              attributes: {
                'data-icon': 'cloud'
              }
          }),
        ];
        content += '<div ' + drupalgap_attributes(attrs) + '>' +
          '<!-- panel content goes here -->' +
          theme('jqm_item_list', { items: items }) +
        '</div><!-- /panel -->';

        break;

      // The button to open the menu.
      case 'my_panel_block_button':

        content = bl('Open panel', '#' + drupalgap_panel_id('my_panel_block'), {
            attributes: {
              'data-icon': 'bars',
              'data-iconpos': 'notext',
              'class': 'ui-btn-left'
            }
        });

        break;
     // The powered by block
      case 'my_powered_by_block':

        content = '<h2><center>' + '<a href="http://avodahsystems.com"><a><font color="white">Powered By:</font></a><li><a href="http://avodahsystems.com">Avodah Systems</a></li></a>' + '</  center></h2>';

        break;
     // The my_custom_block
      case 'my_custom_block':
          var d = new Date();
      content = '<h2><center>' + d.toDateString() + '</center></h2>';

        break;
    }
    return content;
  }
  catch (error) { console.log('my_module_block_view - ' + error); }
}
