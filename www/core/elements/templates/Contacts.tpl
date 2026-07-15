{include 'file:chunks/Head.tpl'}

<section class="text">
    <div class="container">
        <div class="row">
            <div class="breads col-md-12">
                {'pdoCrumbs' | snippet : [
                	'showHome' => 1,
                	'outputSeparator' => ''
                ]}
            </div> 
            <div class="col-md-12">
                <div class="text-block">
                    <div class="row">
                        <div class="col-md-6">
                        <h2>{$_modx->resource.pagetitle}</h2> 
                                <div itemscope itemtype="http://schema.org/Organization">
                                <p><b><span itemprop="name">Клуб Монет</span> (офис продаж):</b></p>
                                <br />
                                <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                                    <p> <span itemprop="addressLocality">г. Москва.</span><br />ТЦ «Город Хобби». <span itemprop="streetAddress">Щелковское шоссе, д.3, стр.1,<br />первый этаж, пав. 142.</span><br /></p>
                                </div>
                                <br />
                                <p>Телефон : <strong><span itemprop="telephone">8 (967) 050 46 02</span></strong></p>
                                <p>E-mail: <strong><a href="mailto:info@club-monet.ru"><span itemprop="email">info@club-monet.ru</span></a></strong></p>
                                <br />
                                <p>ИП Степанова Светлана Николаевна</p>
                                <p>ИНН 771965156653/ОГРНИП 313774621900242</p>
                                <p>тел 8(967)050-4602</p>
                            <hr>
                            <br />
                            {'!AjaxForm' | snippet : [
                                'snippet' => 'FormIt',
                                'form' => 'tpl.AjaxForm',
                                'emailTpl' => 'sentEmailTpl',
                                'hooks' => 'email',
                                'emailSubject' => 'Заявка с сайта Клуб Монет',
                                'emailTo' => 'info@club-monet.ru',
                                'emailFromName' => 'Клуб Монет',
                                'emailFrom' => 'admin@club-monet.ru',
                                'validate' => 'email:required',
                                'validationErrorMessage' => 'Ошибка заполнения',
                                'successMessage' => 'Спасибо за заявку!'
                            ]}
                        </div>
                        </div>
                        <div class="col-md-6">
                            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A69ddbe05aa4b2b65be2b7ba43f3442a24b2dfd4c7f6a73376af32f75c4378d30&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
                        </div>
                    </div>
                </div>    
            </div>
                       
        </div>
             
    </div>
</section>

{include 'file:chunks/Footer.tpl'}

