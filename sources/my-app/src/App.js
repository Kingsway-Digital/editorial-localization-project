import PageByUrl from "./PageByUrl";
import {Grid} from "@material-ui/core";
import GlobalHome from "./GlobalHome";

function App() {

  return (
    <Grid container spacing={0}
          alignItems="center"
          justify="center"
          style={{minHeight: '100vh'}}
    >
      <Grid item>
        <GlobalHome/>

        <PageByUrl pageUrl={"/en"}/>
        <PageByUrl pageUrl={"/en/style"}/>

        <PageByUrl pageUrl={"/es"}/>
        <PageByUrl pageUrl={"/es/style"}/>

        <PageByUrl pageUrl={"/jp"}/>
        <PageByUrl pageUrl={"/jp/style"}/>
      </Grid>
    </Grid>
  );
}

export default App;
