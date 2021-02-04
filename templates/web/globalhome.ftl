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

<h2 <@studio.iceAttr iceGroup="page"/>>${contentModel.title_t}</h2>
<section <@studio.iceAttr iceGroup="page"/>>
    ${contentModel.body_html}
</section>
</body>
</html>
