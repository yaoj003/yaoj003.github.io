
 // lock body scroll
var scrollPosition = [
    window.self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    window.self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];

var html = $('body');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

