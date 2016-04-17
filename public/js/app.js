'use strict';

function showHideLoadMore(id) {
    if($('#'+id+'_yaml_content table tbody').children().length < 5) {
        $('#'+id+'_load_more_label').hide();
    } else {
        $('#'+id+'_load_more_label').show();
    }
}
function tablifyConfig () {
    $('.yaml-content').each(function () {
        var json = JSON.parse(this.innerHTML);
        if (jQuery.isEmptyObject(json)) {
            $(this).html("<p>Empty Config File!!!</p>");
        } else {
            $(this).html(JsonHuman.format(json));
        }
        /*Get number of rows in this table and decide to show 'load more' button */
        var id = $(this).attr('id').replace('_yaml_content', '');
        showHideLoadMore(id);
    });
}

function refreshTile(id) {
    id = id.replace("_refresh", "");
    $.ajax({
        'type': 'post',
        'url': '/',
        'data': {
            'config_path':$("#"+id+"_config_path").val(),
            'config_type':$("#"+id+"_config_type").val()
        },
        'success': function (data) {
            data.id = id;
            // For dust.render tile.dust needs to precompiled using dustc
            dust.render("public/templates/tile", data, function(err, out) {
                if(err) console.error(err);
                $('#'+id+"_container").replaceWith(out);
            });
            var json = JSON.parse($('#'+id+"_yaml_content").html());
            $('#'+id+"_yaml_content").html(JsonHuman.format(json));

            /*Get number of rows in this table and decide to show 'load more' button */
            showHideLoadMore(id);
        }
    })    
}

$(function () {
    dust.isDebug = true;
    dust.debugLevel = 'DEBUG';
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': window.csrfToken
        },
        cache: false
    });
    $(document).ready(function (element){
        tablifyConfig();
    });
});