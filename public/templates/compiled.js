(function(dust){dust.register("public\/templates\/tile",body_0);function body_0(chk,ctx){return chk.w("<div id=\"").f(ctx.get(["id"], false),ctx,"h").w("_container\" class=\"widget widget_custom widget_").f(ctx.get(["color"], false),ctx,"h").w("\"><div class=\"widget_content\">                <div class=\"main\"><div class=\"tile-header\">").f(ctx.get(["name"], false),ctx,"h").w("<input type=\"hidden\" id=\"").f(ctx.get(["id"], false),ctx,"h").w("_config_path\" name=\"config_path\" value=\"").f(ctx.get(["__path"], false),ctx,"h").w("\"><input type=\"hidden\" id=\"").f(ctx.get(["id"], false),ctx,"h").w("_config_type\" name=\"config_type\" value=\"").f(ctx.get(["__type"], false),ctx,"h").w("\"><input onclick=\"refreshTile(this.id)\" class=\"refresh-icon\" id=\"").f(ctx.get(["id"], false),ctx,"h").w("_refresh\" type=\"image\" src=\"/images/refresh.png\" alt=\"Refresh\"/></div><div class=\"tile-content\"><input type=\"checkbox\" id=\"").f(ctx.get(["id"], false),ctx,"h").w("_load_more\" role=\"button\"><label id=\"").f(ctx.get(["id"], false),ctx,"h").w("_load_more_label\"  for=\"").f(ctx.get(["id"], false),ctx,"h").w("_load_more\"><span class=\"glyphicon glyphicon-chevron-down\"></span><span class=\"glyphicon glyphicon-chevron-up\"></span></label>  <div class=\"yaml-content\" id=\"").f(ctx.get(["id"], false),ctx,"h").w("_yaml_content\">").f(ctx.get(["fileContent"], false),ctx,"h").w("</div><br/><br/></div></div></div></div>");}body_0.__dustBody=!0;return body_0}(dust));
