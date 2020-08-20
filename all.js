jQuery(document).ready(function(){
    jQuery('#searchForm').on('submit', function(e){
        e.preventDefault();
        if (!jQuery('#search').val()){
            jQuery('#search').focus();
        } else {
            this.submit();
        }
    });
});
