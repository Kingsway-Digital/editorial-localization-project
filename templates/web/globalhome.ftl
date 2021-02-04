<!DOCTYPE HTML>
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

        <h2>${contentModel.title_t}</h2>
        <section>
            ${contentModel.body_html}
        </section>
        <hr/>
        <section>
            <ul>
                <li>Move content into folders by locale (done)</li>
                <li>Update engine site config and add targeting block. Select merge. (done)</li>
                <li>Update left-rail to use locale in navigation (done)</li>

                <li>restrict access to folders based on editor's role</li>
                <li>reconfigure sidebar to show locale-specific homes</li>
                <li>update targeting system to cause Engine (and the SiteItemService) to load by locale</li>
                <li>Configure {locale} macro in the form controls when creating new components</li>
                <li>Maybe: page controller</li>
            </ul>
        </section>
    </body>
</html>
