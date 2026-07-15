<?php
define ('K_TCPDF_EXTERNAL_CONFIG', true);
//Installation path (/var/www/tcpdf/).
//By default it is automatically calculated but you can also set it as a fixed string to improve performances.
//define ('K_PATH_MAIN', '');

//URL path to tcpdf installation folder (http://localhost/tcpdf/).
//By default it is automatically set but you can also set it as a fixed string to improve performances.
//define ('K_PATH_URL', '');

//Path for PDF fonts.
//By default it is automatically set but you can also set it as a fixed string to improve performances.
//define ('K_PATH_FONTS', K_PATH_MAIN.'fonts/');

//Default images directory.
//By default it is automatically set but you can also set it as a fixed string to improve performances.
define ('K_PATH_IMAGES', 'images/');

//Deafult image logo used be the default Header() method.
//Please set here your own logo or an empty string to disable it.
//define ('PDF_HEADER_LOGO', 'logo.jpg');

define ('PDF_HEADER_LOGO_WIDTH', 0);
define ('K_PATH_CACHE', sys_get_temp_dir().'/');
define ('K_BLANK_IMAGE', '_blank.png');
//Page orientation (P=portrait, L=landscape).
define ('PDF_CREATOR', 'TCPDF');
define ('PDF_AUTHOR', 'OrdrerPrint');
define ('PDF_HEADER_TITLE', '');
define ('PDF_HEADER_STRING', "");
//Document unit of measure [pt=point, mm=millimeter, cm=centimeter, in=inch].
define ('PDF_UNIT', 'mm');
define ('PDF_FONT_NAME_MAIN', 'helvetica');
define ('PDF_FONT_SIZE_MAIN', 10);
define ('PDF_FONT_NAME_DATA', 'helvetica');
define ('PDF_FONT_SIZE_DATA', 8);
define ('PDF_FONT_MONOSPACED', 'courier');
define ('PDF_IMAGE_SCALE_RATIO', 1.25);
//Magnification factor for titles.
define('HEAD_MAGNIFICATION', 1.1);
//Height of cell respect font height.
define('K_CELL_HEIGHT_RATIO', 1.25);
//Title magnification respect main font size.
define('K_TITLE_MAGNIFICATION', 1.3);
//Reduction factor for small font.
define('K_SMALL_RATIO', 2/3);
//Set to true to enable the special procedure used to avoid the overlappind of symbols on Thai language.
define('K_THAI_TOPCHARS', true);
//If true allows to call TCPDF methods using HTML syntax
//IMPORTANT: For security reason, disable this feature if you are printing user HTML content.
define('K_TCPDF_CALLS_IN_HTML', true);
//If true adn PHP version is greater than 5, then the Error() method throw new exception instead of terminating the execution.
define('K_TCPDF_THROW_EXCEPTION_ERROR', false);