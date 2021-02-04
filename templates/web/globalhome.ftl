<!DOCTYPE HTML>
<#import "/templates/system/common/cstudio-support.ftl" as studio />
<html>
<head>
</head>
<body>
<h1>Globalization Home</h1>
<h2>Please select your site</h2>
<ul>
    <li><a href="/en">English</a></li>
    <li><a href="/es">Spanish</a></li>
    <li><a href="/jp">Japanese</a></li>
</ul>

<section <@studio.iceAttr />>
    <h2>${contentModel.title_t}</h2>
    ${contentModel.body_html}
</section>
<@studio.toolSupport/>
</body>
</html>
