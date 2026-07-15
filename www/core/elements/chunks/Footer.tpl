
<div id="qview-result">
    <div class="spinner"></div>
</div>
<footer class="footer">
    <div class="container">    
        <div class="row">
            <div class="col-md-12">
                <img src="/assets/monety/img/logo-s.png" class="logo-f">
            </div>
            <div class="col-md-3 ">
                <ul>
                    <li class="first"><a href="[[~2]]">Монеты</a></li>
                    {'pdoMenu' | snippet : [
                        'parents' => 3,
                        'level' => 1,
                        'templates' => 6,
                        'firstClass' => 'start',
                    ]}          
                </ul>
                <ul>
                    <li class="first"><a href="[[~10]]">Медали</a></li>
                    {'pdoMenu' | snippet : [
                        'parents' => 10,
                        'level' => 1,
                        'templates' => 6,
                        'firstClass' => 'start',
                    ]}             
                </ul>
                </nav>
            </div>
            <div class="col-md-3 ">           
                <nav class="bottom-nav">
                <ul>
                    <li class="first"><a href="[[~15]]">Банкноты</a></li>        
                    {'pdoMenu' | snippet : [
                        'parents' => 15,
                        'level' => 1,
                        'templates' => 6,
                        'firstClass' => 'start',
                    ]}      
                </ul>
                <ul>
                    <li class="first"><a href="[[~16]]">Наборы</a></li>
                    {'pdoMenu' | snippet : [
                        'parents' => 16,
                        'level' => 1,
                        'templates' => 6,
                        'firstClass' => 'start',
                    ]}                
                </ul>
                </nav>
            </div>
            <div class="col-md-3 ">
                <nav class="bottom-nav">
                <ul>
                    <li class="first"><a href="[[~17]]">Аксессуары</a></li>
                    {'pdoMenu' | snippet : [
                        'parents' => 17,
                        'level' => 1,
                        'templates' => 6,
                        'firstClass' => 'start',
                    ]}                
                </ul>
                <ul>
                    <li class="first"><a href="[[~52]]">Литература</a></li>
                    {'pdoMenu' | snippet : [
                        'parents' => 52,
                        'level' => 1,
                        'templates' => 6,
                        'firstClass' => 'start',
                    ]}                
                </ul>
                </nav>
            </div>
            <div class="col-md-3 ">
                <nav class="bottom-nav right">    
                    <ul class="">
                        <li><a href="{2173 | url}">О магазине</a></li>
                        <li><a href="{22 | url}">Оплата и доставка</a></li>
                        <li><a href="{23 | url}">Система скидок </a></li>
                        <li><a href="{26 | url}">Контакты </a></li>
                        <li><a href="{8714 | url}">Топ-лоты</a></li>
                        <li><a href="{25189 | url}">Новинки</a></li>
                    </ul>
                    <!-- <ul class="" style="opacity: 0.2">
                        <li>Query Time: [^qt^]</li>
                        <li>Query Count: [^q^]</li>
                        <li>Parse Time: [^p^]</li>
                        <li>Total time: [^t^]</li>
                        <li>Source: [^s^]</li>
                    </ul> -->
                    
                </nav>
            </div>
                        
        </div>    
    </div>
    <div class="container container-footer">
    <div class=" col-md-12 social-footer">
                <a class="btn btn-social-icon btn-vk" href="https://vk.com/clubmonetshop"><span class="fa fa-vk" target="_blank"></span></a>
                <a class="btn btn-social-icon btn-odnoklassniki" href="https://m.ok.ru/group/54120086306884" target="_blank"><span class="fa fa-odnoklassniki"></span></a> 
            </div>
    </div>        
</footer>
</div>
<!--Scripts-->


<!-- <script src="/assets/monety/js/main.js"></script> -->    
<script src="/assets/monety/js/separate/jquery.js"></script>  
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> 
<script src="/assets/monety/js/separate/mmenu.js"></script>  
<script src="/assets/monety/js/separate/magnify.js"></script> 
<script src="/assets/monety/js/separate/lazyload.min.js"></script>
<script src="/assets/monety/js/separate/custom.js"></script>

<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
{ignore}
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-74369619-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'UA-74369619-1');
</script>
{/ignore}


</body>
</html>