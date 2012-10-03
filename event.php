<div class="panel-display container container-16 event" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
	
	<div class="container-inside">  
	
		<div class="region">
			<div class="inside"><?php print $content['header']; ?></div>
		</div>
		
		<div class="region">
			<div class="inside"><?php print $content['related']; ?></div>
		</div>
		
		<div class="region">
			<div class="inside"><?php print $content['moreevents']; ?></div>
		</div>
		
		
		<div class="region">
			<div class="inside"><?php print $content['reviews']; ?></div>
		</div>

	</div>
</div>
