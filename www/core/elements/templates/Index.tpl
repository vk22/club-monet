{include 'file:chunks/Head.tpl'}

<section class="intro">
        <div class="container">
        <div class="row">
            <div class="carouselIndex">
                <div class="carouselIndexWrap">
                    <div class="container">
                      <div class="carousel">
                        {var $res = '!getLotsCarousel' | snippet }
                        {if $res}
                        {$res}
                        {/if}      
                        <div id="banner-1" class="textContent left item">
                            <a href="[[~23]]">
                                <img src="/assets/monety/img/banner-13.jpg" alt="" />
                                <div>
                                    <h1>Гибкая система скидок</h1>
                                </div>
                            </a>
                        </div> 
                        <div id="banner-2" class="textContent center item">
                            <a href="#">
                                <img src="/assets/monety/img/carousel-fon.jpg" alt="" />
                                <div>
                                    <h1>8 (967) 050 46 02</h1>
                                    <p>Заказы по телефону в Москве</p>
                                </div>
                            </a>
                        </div>
                        <div id="banner-3" class="textContent center item">
                            <a href="[[~26]]">
                                <img src="/assets/monety/img/carousel-fon.jpg" alt="" />
                                <div>
                                    <h2>ПОКУПАЕМ КОЛЛЕКЦИИ МОНЕТ И БАНКНОТ</h2>
                                    <!-- <p>Заказы по телефону в Москве</p> -->
                                </div>
                            </a>
                        </div>
                        
                      </div>
                    </div>
                    <div id="carNext" class="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none">
                            <path d="M0 0L7.5 7.5L0 15" transform="translate(2 2)" stroke="#504d4d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div id="carPrev" class="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none">
                            <path d="M0 0L7.5 7.5L0 15" transform="translate(2 2)" stroke="#504d4d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>    
            </div>
      </div>
    </div>    
    
</section>
<section class="catalog">
    <div class="container">
        <div class="row">
            <div class="col-md-12 cat-title" id="new"><h3>Новинки</h3></div>
                {var $res = '!getNewLotsIndex' | snippet }
                {if $res}
                {$res}
                {/if}
        <div class="col-md-12 view-more-div"><a href="newin.html" class="view-more">Все новинки</a></div>    
        </div>
    </div>
</section>
<section class="catalog text">
    <div class="container">
        <div class="row">
            <div class="col-md-12 cat-title">
                <h1 style="margin-bottom: 0px;">О нашем нумизматическом интернет-магазине</h1>
                <h2 style="float:left;font-family: 'futurabookc',Verdana,sans-serif;font-size:18px;margin-bottom: 20px">Продажа монет мира, монет царской России, монет СССР, юбилейных монет, наборов монет и аксессуаров для коллекционирования.</h2>
            </div>
            <div class="col-md-12">
                <div class="text-block">
                    
                    <p>Уважаемые коллекционеры, мы рады приветствовать вас в самом удобном нумизматическом интернет магазине.</p>
                    <p>Мы знаем, что вы ищите новые экземпляры монет и банкнот для своей коллекции и готовы предложить вашему вниманию весь ассортимент нашего магазина. Все изображения монет, которые вы видите на сайте, будь то монеты СССР, юбилейные монеты, монеты царской России, монеты стран мира, античные и средневековые монеты, монеты Северной , Южной и Центральной Америки, Азии ,Африки или Океании, отражают их реальное состояние. Кроме того, в нашем магазине вы найдете наборы монет всех стран мира. Купить монеты, банкноты, наборы монет, медали, марки аксессуары для коллекционирования можно в любую погоду, 24 часа в сутки, не выходя из дома, с доставкой по России. Просто добавьте нужные позиции в корзину, оформите заказ и ожидайте свежее пополнение своей коллекции. Хотите посмотреть все позиции в живую? В нашем магазине в Москве вы найдете более 60 000 наименований монет мира и СССР, банкнот и медалей.
                    </p>
                    <p>
                    г. Москва.<br>
                    ТЦ «Город Хобби». Щелковское шоссе, д.3, стр.1,<br>
                    первый этаж, пав. 142.<br>
                    Телефон : 8 (967) 050 46 02<br>
                    E-mail: <a href="mailto:info@club-monet.ru">info@club-monet.ru</a>
                    </p>
                </div>
            </div>
                                                 
        </div>
    </div>
</section>
{include 'file:chunks/Footer.tpl'}
<script src="/assets/monety/js/carousel-3d.js"></script>
