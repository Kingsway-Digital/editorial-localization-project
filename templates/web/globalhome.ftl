<!DOCTYPE HTML>
<#import "/templates/system/common/cstudio-support.ftl" as studio />
<html>
<head>
    <title>${contentModel.title_t}</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    <!--[if lte IE 8]>
    <script src="/static-assets/js/ie/html5shiv.js"></script><![endif]-->
    <link rel="stylesheet" href="/static-assets/css/main.css?v=${siteContext.siteName}"/>
    <!--[if lte IE 9]>
    <link rel="stylesheet" href="/static-assets/css/ie9.css"/><![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="/static-assets/css/ie8.css"/><![endif]-->
    <link rel="stylesheet" href="/static-assets/css/jquery-ui.min.css"/>
</head>
<body>
<div id="wrapper">
    <div id="main">
        <div class="inner">
            <section>
                <h1>${contentModel.title_t}</h1>
            </section>
            <section>
                <div <@studio.iceAttr iceGroup="body" />>
                    ${contentModel.body_html}
                </div>
            </section>
        </div>
    </div>
    <div id="left-rail">
        <div class="inner">
            <nav id="menu">
                <header class="major">
                    <h2>Please select your site</h2>
                </header>
                <p>This page could be a splash page or
                it could do some auto-detection, or
                simply include the default language.
                However, for demonstration purposes,
                it is shown here in detail.</p>
                <ul>
                    <li><a href="/?locale=en_us">English</a></li>
                    <li><a href="/?locale=es_ar">Spanish</a></li>
                    <li><a href="/?locale=jp_jp">Japanese</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>


<script src="/static-assets/js/jquery.min.js"></script>
<script src="/static-assets/js/jquery-ui.min.js"></script>
<script src="/static-assets/js/skel.min.js"></script>
<script src="/static-assets/js/util.js"></script>
<!--[if lte IE 8]>
<script src="/static-assets/js/ie/respond.min.js"></script><![endif]-->
<script src="/static-assets/js/main.js?v=${siteContext.siteName}"></script>
<@studio.toolSupport/>
</body>
</html>
