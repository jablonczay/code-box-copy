;(function ($, undefined) {

    var pluginName = 'codeBoxCopy',
        defaults = {
            tooltipText: 'Copied',
            tooltipShowTime: 1000,
            tooltipFadeInTime: 300,
            tooltipFadeOutTime: 300
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var $btn, $tooltip, btn, tooltip, opts, clipboard;

            btn = this.element.querySelector('.code-box-copy__btn');

            if (!btn) return;

            opts = this.options;
            clipboard = new Clipboard(btn);

            clipboard.on('success', function(e) {
                $btn = $(e.trigger);
                $btn.prop('disabled', true);

                tooltip = '<span class="code-box-copy__tooltip">';
                tooltip += opts.tooltipText;
                tooltip += '</span>';
                $(tooltip).prependTo($btn);
                $tooltip = $btn.find('.code-box-copy__tooltip');
                $tooltip.fadeIn(opts.tooltipFadeInTime);

                setTimeout(function () {
                  $tooltip.fadeOut(opts.tooltipFadeOutTime, function () {
                      $tooltip.remove();
                  });
                  $btn.prop('disabled', false);
                }, opts.tooltipShowTime);
            });
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    };
})(jQuery);