import PageByUri from "./PageByUri";
import GlobalHome from "./GlobalHome";
import ComponentByPath from "./ComponentByPath";

function App() {

  return (
    <article>
      <GlobalHome/>

      <PageByUri uri={"/en"}/>
      <PageByUri uri={"/en/style"}/>

      <PageByUri uri={"/es"}/>
      <PageByUri uri={"/es/style"}/>

      <PageByUri uri={"/jp"}/>
      <PageByUri uri={"/jp/style"}/>

      <ComponentByPath path={"/site/components/en/contacts/contact-widget.xml"}/>
      <ComponentByPath path={"/site/components/es/contacts/contact-widget.xml"}/>
      <ComponentByPath path={"/site/components/jp/contacts/contact-widget.xml"}/>
    </article>
  );
}

export default App;
